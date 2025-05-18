const swipper = document.querySelector('[data-theme_swipper]');
swipper.addEventListener('change', () => {
  if (swipper.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});
