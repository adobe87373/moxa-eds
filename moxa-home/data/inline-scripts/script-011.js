document.querySelector('[id*="_TextFooterEmail"]').addEventListener('keydown', function (e) {
  const submitBtn = this.parentNode.querySelector('button');
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!submitBtn.disabled) submitBtn.click();
  }
});
