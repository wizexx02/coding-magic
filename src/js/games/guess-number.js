export const guessNumberInit = () => {
  const RIDDLE_NUMBER = Math.floor(Math.random() * 10 + 1);
  const gameContainer = document.querySelector('.guess-number');

  const gameHtml = `
  <div class="guess-number__container">
    <h2 class="game__title">Вгадай число, яке загадав комп’ютер</h2>
    <div class="guess-number__wrapper">
        <form class="guess-number__form" data-guess_number_form>
          <input class="guess-number__input" type="number" max="10" min="0" required name="guessNumber" placeholder="Введіть число"/>
          <button class="guess-number__button" name="guessNumberButton">S</button>
        </form>
    </div>
    <button class="guess-number__restart";">Перезапустити гру</button>
    </div>`;

  gameContainer.innerHTML = gameHtml;
  const guessNumberForm = document.querySelector('[data-guess_number_form]');
  const restartButton = document.querySelector('.guess-number__restart');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const numberField = form.guessNumber;

    const userNumber = parseInt(numberField.value);

    if (RIDDLE_NUMBER === userNumber) {
      guessNumberForm.insertAdjacentHTML(
        'afterend',
        `<p class="guess-number__message">Вітаю, ви вгадали число! (${RIDDLE_NUMBER})</p>`
      );
    } else {
      guessNumberForm.insertAdjacentHTML(
        'afterend',
        `<p class="guess-number__message guess-number__message--error">Ви програли, комп’ютер загадав  (${RIDDLE_NUMBER})</p>`
      );
    }
    restartButton.classList.add('guess-number__restart--show');
    form.guessNumber.disabled = true;
    form.guessNumberButton.disabled = true;
  };
  const handleRestart = () => {
    // Видалення обробників подій
    guessNumberForm.removeEventListener('submit', handleSubmit);
    restartButton.removeEventListener('click', handleRestart);
    // Перезапуск гри
    guessNumberInit();
  };

  guessNumberForm.addEventListener('submit', handleSubmit);
  restartButton.addEventListener('click', handleRestart);
};
