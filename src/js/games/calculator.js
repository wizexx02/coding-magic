export const calculatorInit = () => {
  let ACTION = '';
  const gameContainer = document.querySelector('.calculator');

  const gameHtml = `
  <div class="calculator__container">
    <h2 class="game__title">Калькулятор</h2>
        <form class="calculator__form" data-calculator_form>
          <input class="calculator__input" type="number" required name="firstNumberField" placeholder="Введіть число"/>

          <ul class="calculator__actions" data-actions>
            <li class="calculator__action">
                <button class="calculator__button" type="button" data-action="sum">+</button>
            </li>
             <li class="calculator__action">
                <button class="calculator__button" type="button" data-action="product ">*</button>
            </li>
             <li class="calculator__action">
                <button class="calculator__button" type="button" data-action="difference">-</button>
            </li>
             <li class="calculator__action">
                <button class="calculator__button" type="button" data-action="quotient">/</button>
            </li>
          </ul>
          <input class="calculator__input" type="number" required name="secondNumberField" placeholder="Введіть число"/>

          <button class="calculator__button" type="button" data-result="result">=</button>

          <div class="calculator__result"><p data-output>Результат</p></div>
        </form>
    </div>`;

  gameContainer.innerHTML = gameHtml;

  const calculatorForm = document.querySelector('[data-calculator_form]');
  const resultOutput = document.querySelector('[data-output]');

  const calculate = (firstNumber, secondNumber, action) => {
    console.log(firstNumber, secondNumber, action);
    let result = 0;
    switch (action) {
      case 'sum':
        result = firstNumber + secondNumber;
        break;

      case 'product ':
        result = firstNumber * secondNumber;
        break;

      case 'difference':
        result = firstNumber - secondNumber;
        break;
      case 'quotient':
        if (secondNumber) {
          result = firstNumber / secondNumber;
        } else {
          result = null;
        }
        break;
    }
    return result;
  };

  const handleActionClick = event => {
    const target = event.target;

    if (target.dataset.action) {
      ACTION = target.dataset.action;
    }

    if (target.dataset.result) {
      if (!ACTION) {
        alert('Оберіть дію!');
        return;
      }
      const firstNumber = parseFloat(calculatorForm.firstNumberField.value);
      const secondNumber = parseFloat(calculatorForm.secondNumberField.value);

      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Будь ласка, введіть обидва числа');
        return;
      }

      const result = calculate(firstNumber, secondNumber, ACTION);

      resultOutput.textContent =
        result !== null ? `Результат: ${result}` : 'На нуль ділити не можна!';

      ACTION = '';
      calculatorForm.firstNumberField.value = '';
      calculatorForm.secondNumberField.value = '';
    }
  };

  calculatorForm.addEventListener('click', handleActionClick);
};
