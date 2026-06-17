import {
  loadMoxaSharedAssets,
  moxaAssetPath,
} from '../moxa-shared/moxa-shared.js';

const defaults = {
  backgroundImage: moxaAssetPath('images/MGate-G2_KV_1920x550-890d129f1d.jpg'),
  heading: 'Robust Security, Effortless Management',
  description: 'Easy and secure protocol conversion for modern OT networks',
  buttonText: 'Learn More',
  buttonLink: 'https://www.moxa.com/en/spotlight/protocol-gateways/mgate-g2/index',
};

function rowCell(row) {
  if (!row) return null;
  return row.children[0] || row;
}

function cellValue(row) {
  const cell = rowCell(row);
  if (!cell) return '';
  const link = cell.querySelector('a');
  if (link?.href) return link.href;
  return cell.textContent.trim();
}

function contentPathFromReference(reference) {
  if (!reference) return '';

  try {
    const url = new URL(reference, window.location.origin);
    return url.pathname;
  } catch (e) {
    return reference;
  }
}

function apiUrlFromContentFragmentPath(reference) {
  const contentPath = contentPathFromReference(reference)
    .replace(/\.json$/, '')
    .replace(/\.html$/, '')
    .replace(/\/$/, '');

  if (!contentPath.startsWith('/content/dam/')) return '';

  const assetPath = contentPath.slice('/content/dam/'.length);

  try {
    const referenceUrl = new URL(reference, window.location.origin);
    const origin = referenceUrl.origin === window.location.origin ? '' : referenceUrl.origin;
    return `${origin}/api/assets/${assetPath}.json`;
  } catch (e) {
    return `/api/assets/${assetPath}.json`;
  }
}

function isAuthorHost() {
  return window.location.hostname.endsWith('.adobeaemcloud.com');
}

function fieldValue(field) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  if (Array.isArray(field)) return field.map(fieldValue).filter(Boolean).join(' ');
  if (typeof field !== 'object') return String(field);

  return field.value
    ?? field.html
    ?? field.text
    ?? field.path
    ?? field.url
    ?? field.href
    ?? '';
}

function getElement(elements, name) {
  return fieldValue(elements?.[name]);
}

function elementsFromContentFragment(json) {
  return json?.properties?.elements
    ?? json?.elements
    ?? json?.data?.properties?.elements
    ?? json?.data?.elements
    ?? {};
}

function plainTextFromHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = html || '';
  return template.content.textContent.trim();
}

function buttonFromCta(cta) {
  if (!cta) {
    return {
      text: defaults.buttonText,
      href: defaults.buttonLink,
    };
  }

  const template = document.createElement('template');
  template.innerHTML = cta;
  const link = template.content.querySelector('a');

  return {
    text: link?.textContent.trim() || plainTextFromHtml(cta) || defaults.buttonText,
    href: link?.href || defaults.buttonLink,
  };
}

async function readJsonResponse(response) {
  const text = await response.text();
  if (!text.trim().startsWith('{')) return null;
  return JSON.parse(text);
}

function fetchJsonWithNavigation(apiUrl) {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    let completed = false;

    iframe.hidden = true;
    iframe.setAttribute('aria-hidden', 'true');

    const finish = (value) => {
      if (completed) return;
      completed = true;
      iframe.remove();
      resolve(value);
    };

    const timeout = window.setTimeout(() => finish(null), 5000);

    iframe.addEventListener('load', () => {
      window.clearTimeout(timeout);

      try {
        const text = iframe.contentDocument?.body?.textContent.trim();
        finish(text ? JSON.parse(text) : null);
      } catch (e) {
        finish(null);
      }
    });

    iframe.src = apiUrl;
    document.body.append(iframe);
  });
}

async function fetchContentFragment(reference) {
  const apiUrl = apiUrlFromContentFragmentPath(reference);
  if (!apiUrl) return null;

  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    const json = await readJsonResponse(response);
    if (json) return json;
  }

  if (isAuthorHost()) {
    return fetchJsonWithNavigation(apiUrl);
  }

  return null;
}

async function readConfig(block) {
  const rows = [...block.children];
  const reference = cellValue(rows[0]);
  const contentFragment = await fetchContentFragment(reference);
  const elements = elementsFromContentFragment(contentFragment);
  const button = buttonFromCta(getElement(elements, 'cta'));
  const description = plainTextFromHtml(getElement(elements, 'description'));

  return {
    backgroundImage: getElement(elements, 'backgroundImage') || getElement(elements, 'image') || defaults.backgroundImage,
    heading: getElement(elements, 'title') || defaults.heading,
    description: description || defaults.description,
    buttonText: button.text,
    buttonLink: button.href,
  };
}

function createBanner(config) {
  return document.createRange().createContextualFragment(`
    <div class="hero-carousel carousel-loaded">
      <div class="hero-carousel__slider slick-initialized slick-slider">
        <div class="slick-list draggable">
          <div class="slick-track">
            <div class="hero-carousel__slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false">
              <div class="hero-carousel__item -image" data-value="img">
                <div class="hero-carousel__img pic" style="background:url('${config.backgroundImage}') center center / cover no-repeat;">
                  <div class="container">
                    <div class="hero-carousel__container">
                      <h2 class="hero-carousel__heading"><b>${config.heading}</b></h2>
                      <p class="hero-carousel__paragraph">${config.description}</p>
                      <a class="border-btn border-btn--l border-btn--white" href="${config.buttonLink}">
                        <span class="fill-btn__text">${config.buttonText}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}

export default async function decorate(block) {
  await loadMoxaSharedAssets();
  const config = await readConfig(block);
  block.replaceChildren(createBanner(config));
}
