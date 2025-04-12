function maxNumberGameInit() {
  const gameContainer = document.querySelector('.max-number-game');

  const gameHtml = `
      <div class="max-number-game__container">
        <h2 class="max-number-game__title">Введіть 3 числа</h2>
        <div class="max-number-game__wrapper">
          <form class="max-number-game__form" id="max-number-form">
            <input type="number" name="num1" placeholder="Введіть число" required />
            <input type="number" name="num2" placeholder="Введіть число" required />
            <input type="number" name="num3" placeholder="Введіть число" required />
            <button type="submit">OK</button>
          </form>
          <p id="max-number-result">Найбільше число, яке ви ввели - (число)</p>
  
          <!-- Місце для картинки -->
          <!-- <img src="image.png" alt="some image" class="max-number-game__image" /> -->
        </div>
      </div>
    `;

  gameContainer.innerHTML = gameHtml;

  const form = document.getElementById('max-number-form');
  const result = document.getElementById('max-number-result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = parseFloat(form.num1.value);
    const num2 = parseFloat(form.num2.value);
    const num3 = parseFloat(form.num3.value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      result.textContent = 'Будь ласка, введіть всі три числа правильно.';
      return;
    }

    const max = Math.max(num1, num2, num3);
    result.textContent = `Найбільше число, яке ви ввели - ${max}`;
  });
}

document.addEventListener('DOMContentLoaded', maxNumberGameInit);
