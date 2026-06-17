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

  return {
    title: plainTextFromHtml(getElement(elements, 'title')) || 'Content Fragment Card',
    description: plainTextFromHtml(getElement(elements, 'description')) || '',
  };
}

function createCard(config) {
  const article = document.createElement('article');
  article.className = 'cf-card-inner';

  const title = document.createElement('h3');
  title.className = 'cf-card-title';
  title.textContent = config.title;
  article.append(title);

  if (config.description) {
    const description = document.createElement('p');
    description.className = 'cf-card-description';
    description.textContent = config.description;
    article.append(description);
  }

  return article;
}

export default async function decorate(block) {
  const config = await readConfig(block);
  block.replaceChildren(createCard(config));
}
