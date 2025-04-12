const burgerBtn = document.querySelector('.header__list-button');
const filterMenu = document.querySelector('[data-filter]');

let isOpen = false;

burgerBtn.addEventListener('click', () => {
  if (isOpen) {
    filterMenu.style.opacity = '0';
    filterMenu.style.pointerEvents = 'none';
  } else {
    filterMenu.style.opacity = '1';
    filterMenu.style.pointerEvents = 'auto';
  }
  isOpen = !isOpen;
});
