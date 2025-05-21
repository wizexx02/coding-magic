const welcomeForm = document.querySelector('[data-welcome-form]');
const backdrop = document.querySelector('[data-welcome-backdrop]');
const closer = document.querySelector('[data-welcome-close]');

function modalCloser() {
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  document.body.classList.remove('modal-open');
}

function modalOpener() {
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  document.body.classList.add('modal-open');
}

window.addEventListener('DOMContentLoaded', modalOpener);

closer.addEventListener('click', modalCloser);

welcomeForm.addEventListener('submit', e => {
  e.preventDefault();
  modalCloser();
});
