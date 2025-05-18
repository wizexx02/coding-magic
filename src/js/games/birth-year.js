export function leapYearGameInit() {
  const gameContainer = document.querySelector('.leap-year');

  const gameHtml = `
      <div class="leap-year__container">
        <h2 class="leap-year__title">Перевір в який рік ти народився</h2>
        <div class="leap-year__wrapper">
          <form class="leap-year__form" data-leap_year_form>
            <input
              class="leap-year__input"
              type="number"
              name="year"
              placeholder="Введіть рік народження"
              required
            />
            <button class="leap-year__button" name="leapYearCheckButton">
              OK
            </button>
          <p id="leap-year-result" style="display: none;"></p>
        </div>
      </div>
    `;

  if (!gameContainer) return;
  gameContainer.innerHTML = gameHtml;

  const form = document.querySelector('[data-leap_year_form]');
  const result = document.getElementById('leap-year-result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const year = parseInt(form.year.value);

    if (isNaN(year) || year < 1) {
      result.textContent = 'Будь ласка, введіть коректний рік.';
      result.style.color = 'red';
      result.style.display = 'block';
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    result.textContent = isLeap
      ? 'Ви народилися у високосний рік!'
      : 'Ваш рік не високосний.';
    result.style.color = isLeap ? 'green' : 'black';
    result.style.display = 'block';
  });
}
