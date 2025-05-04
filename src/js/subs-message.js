const subscribeForm = document.querySelector('#subscribe-form');
const subscribePopup = document.querySelector('#subscribe-popup');
const subscribePopupClose = document.querySelector('.subscribe-popup__close');
let scrollY;

const closeModal = () => {
  subscribePopup.classList.add('closing');

  subscribePopup.addEventListener(
    'animationend',
    () => {
      subscribePopup.classList.remove('closing');
      subscribePopup.close();
      document.body.classList.remove('modal-open');
      window.scrollTo(0, scrollY);
    },
    { once: true }
  );
};

const handleSubmit = event => {
  event.preventDefault();
  scrollY = window.scrollY;
  document.body.style.top = `-${scrollY}px`;
  document.body.classList.add('modal-open');
  subscribePopup.showModal();
  subscribeForm.reset();
};

const handleClose = () => closeModal();
subscribeForm.addEventListener('submit', handleSubmit);
subscribePopupClose.addEventListener('click', handleClose);

subscribePopup.addEventListener('click', event => {
  if (event.target === subscribePopup) {
    closeModal();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeModal();
  }
});
