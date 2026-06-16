window.addEventListener('DOMContentLoaded', (e) => {
  if (checkIfIE()) {
    const message = document.querySelector('.ie-warning');

    if (message) {
      message.classList.remove('hide');
      syncHeaderPosWithMessageHeight(message);
      window.addEventListener('resize', (e) => {
        syncHeaderPosWithMessageHeight(message);
      });
    }
  }
});
function syncHeaderPosWithMessageHeight(message) {
  const header = document.querySelector('header');
  const messageHeight = message.clientHeight;
  if (header) {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      header.style.top = `${messageHeight}px`;
    } else {
      header.style.top = '';
    }
  }
}
function checkIfIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');

  return msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}
