export const timeCalculatorInit = () => {
  const gameContainer = document.querySelector('.time-calculator');

  const gameHtml = `
    <div class="time-calculator__container">
      <h2 class="game__title">Калькулятор часу</h2>
      <div class="time-calculator__wrapper">
        <form class="time-calculator__form" data-time_calculate_form>
            <input class="time-calculator__input" type="number" required name="totalMinutes" placeholder="Введіть число"/>
            <button class="time-calculator__button" name="timeCalculatorNumberButton">S</button>
        </form>
        <div class="time-calculator__result"><p data-time_calculator_output>Результат</p></div>
       </div>
    </div>`;

  gameContainer.innerHTML = gameHtml;

  const timeCalculatorForm = document.querySelector(
    '[data-time_calculate_form]'
  );
  const outputElement = document.querySelector('[data-time_calculator_output]');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const totalMinutesField = form.totalMinutes;

    const totalMinutes = parseInt(totalMinutesField.value);

    if (isNaN(totalMinutes) || totalMinutes < 0) {
      outputElement.textContent = 'Будь ласка, введіть коректне число.';
      return;
    }
    const days = Math.floor(totalMinutes / 1440);
    const remainingMinutesAfterDays = totalMinutes % 1440;
    const hours = Math.floor(remainingMinutesAfterDays / 60);
    const minutes = remainingMinutesAfterDays % 60;

    outputElement.textContent =
      days > 0
        ? `${days} дн. ${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}`
        : `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}`;
    form.reset();
  };

  timeCalculatorForm.addEventListener('submit', handleSubmit);
};
