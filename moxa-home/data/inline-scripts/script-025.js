(function () {
  function n(b) {
    return function () {
      console.log(b); let a = this.querySelector('h3').textContent; const e = `Explore Now ${b + 1}`; a = {
        event: 'ga4', eventName: 'homepage_promotion', position: e, label: a,
      }; console.log(a); dataLayer.push(a);
    };
  } let d = document.querySelectorAll('.hero-carousel__container a'); d.forEach((b) => {
    b.addEventListener('click', function () {
      let a = this.parentElement.querySelector('h2').textContent.trim(); a = {
        event: 'ga4', eventName: 'homepage_promotion', position: 'Hero Banner', label: a,
      }; console.log(a);
      dataLayer.push(a);
    });
  }); d = document.querySelectorAll('div.hero-carousel__container button[data-modal-id^\x3dKalturaModal]'); d.forEach((b) => {
    b.addEventListener('click', function () {
      let a = this.parentElement.querySelector('h2').textContent.trim(); a = {
        event: 'ga4', eventName: 'homepage_promotion', position: 'Hero Banner', label: a,
      }; console.log(a); dataLayer.push(a);
    });
  }); d = document.querySelectorAll('a.img-card__link'); for (var c = 0; c < d.length; c++)d[c].addEventListener('click', n(c)); const g = document.querySelectorAll('div.inline-img-carousel div.inline-img-carousel__slide a');
  if (g.length == 1) {
    g[0].addEventListener('click', function () {
      let b = this.parentElement.querySelector('h3').textContent; const a = 'Featured Product 1'; b = {
        event: 'ga4', eventName: 'homepage_promotion', position: a, label: b,
      }; console.log(b); dataLayer.push(b);
    });
  } else {
    for (c = 0; c < g.length; c++) {
      (function (b) {
        g[b].addEventListener('click', function () {
          let a = this.parentElement.querySelector('h3').textContent; const e = `Featured Product ${b}`; a = {
            event: 'ga4', eventName: 'homepage_promotion', position: e, label: a,
          }; console.log(a); dataLayer.push(a);
        });
      }(c));
    }
  }
  d = document.querySelectorAll('.grid-section__card'); for (c = 0; c < d.length; c++) {
    const h = d[c].querySelectorAll('button'); const k = d[c].querySelectorAll('a'); h.length > 0 && h.forEach((b, a) => {
      (function (e) {
        b.addEventListener('click', function () {
          const f = {
            event: 'ga4', eventName: 'homepage_promotion', position: `Trending at Moxa ${e + 1}`, label: this.closest('div.grid-section__block').querySelector('h2').textContent.trim(),
          }; console.log(f); dataLayer.push(f);
        });
      }(c));
    }); k.length > 0 && k.forEach((b, a) => {
      (function (e) {
        b.addEventListener(
          'click',
          function () {
            let f = this.querySelector('h2').textContent.trim(); const p = `Trending at Moxa ${e + 1}`; f = {
              event: 'ga4', eventName: 'homepage_promotion', position: p, label: f,
            }; console.log(f); dataLayer.push(f);
          },
        );
      }(c));
    });
  } const l = document.querySelectorAll('div.main-section__block a'); for (c = 0; c < l.length; c++) {
    (function (b) {
      l[b].addEventListener('click', function () {
        let a = ''; this.classList.contains('overlap-carousel__link') && (a = this.querySelector('h2').textContent); this.classList.contains('fill-btn') && (a = this.closest('div.intro-block__main').querySelector('h2').textContent);
        const e = `Theme Promo ${b + 1}`; a = {
          event: 'ga4', eventName: 'homepage_promotion', position: e, label: a,
        }; console.log(a); dataLayer.push(a);
      });
    }(c));
  } const m = document.querySelectorAll('div.news-ticker__slide a'); for (c = 0; c < m.length; c++) {
    (function (b) {
      m[b].addEventListener('click', function () {
        this.classList.contains('overlap-carousel__link') && this.querySelector('h2'); this.classList.contains('fill-btn') && this.closest('div.intro-block__main').querySelector('h2'); let a = `News Ticker ${b + 1}`; a = {
          event: 'ga4',
          eventName: 'homepage_promotion',
          position: a,
          label: this.textContent,
        }; console.log(a); dataLayer.push(a);
      });
    }(c));
  }
}());
