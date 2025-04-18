export const leapYearGameInit = () => {
  const gameContainer = document.querySelector('.leap-year');

  const gameHtml = `
    <div class="leap-year__container">
      <h2 class="leap-year__title">Перевір в який рік ти народився</h2>
      <form class="leap-year__form" data-leap_year_form>
        <input 
          type="number" 
          name="year" 
          placeholder="Введіть рік народження" 
          required 
          class="leap-year__input"
        />
      </form>
      <p class="leap-year__result" data-leap_year_result></p>

      <!-- Місце для картинки -->
      <!-- <img src="image.png" alt="Leap Year" class="leap-year__image" /> -->
    </div>
  `;

  gameContainer.innerHTML = gameHtml;

  const form = document.querySelector('[data-leap_year_form]');
  const result = document.querySelector('[data-leap_year_result]');

  const checkLeapYear = () => {
    const year = parseInt(form.year.value);

    if (isNaN(year) || year < 0) {
      result.textContent = 'Будь ласка, введіть коректний рік.';
      result.style.color = 'red';
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
      result.textContent = 'Ви народилися у високосний рік!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Ваш рік не високосний.';
      result.style.color = 'black';
    }
  };

  form.addEventListener('input', checkLeapYear);
};
