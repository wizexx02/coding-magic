export const maxNumberGameInit = () => {
  const gameContainer = document.querySelector('.biggest-number');

  const gameHtml = `
      <div class="max-number-game__container">
        <h2 class="game__title">Введіть 3 числа</h2>
        <div class="max-number-game__wrapper">
          <form class="max-number-game__form" data-max_number_form>
            <input class="max-number-game__input" type="number" required name="number1" placeholder="Введіть число"/>
            <input class="max-number-game__input" type="number" required name="number2" placeholder="Введіть число"/>
            <input class="max-number-game__input" type="number" required name="number3" placeholder="Введіть число"/>
          
          </form>
          <div class="max-number-game__result">
            <p data-max_number_output>Найбільше число, яке ви ввели - (число)</p>
          </div>
        </div>
      </div>
    `;

  gameContainer.innerHTML = gameHtml;
  const form = document.querySelector('[data-max_number_form]');
  const outputElement = document.querySelector('[data-max_number_output]');

  const handleInput = () => {
    const num1 = parseFloat(form.number1.value);
    const num2 = parseFloat(form.number2.value);
    const num3 = parseFloat(form.number3.value);

    if ([num1, num2, num3].some(num => isNaN(num))) {
      outputElement.textContent = 'Будь ласка, введіть усі три числа.';
      return;
    }

    const max = Math.max(num1, num2, num3);
    outputElement.textContent = `Найбільше число, яке ви ввели - ${max}`;
  };

  form.addEventListener('input', handleInput);
};
