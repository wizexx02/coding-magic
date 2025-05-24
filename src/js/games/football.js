function soccerGameInit() {
  const gameContainer = document.querySelector('.soccer');

  const gameHtml = `
      <div class="football-game__container">
        <h2 class="football-game__title">Футбол</h2>
        <div class="football-game__field" id="football-field">
          <div class="football-game__ball" id="football-ball"></div>
        </div>
      </div>
    `;

  gameContainer.innerHTML = gameHtml;

  const field = document.getElementById('football-field');
  const ball = document.getElementById('football-ball');

  field.addEventListener('mousemove', e => {
    const fieldRect = field.getBoundingClientRect();
    const ballSize = ball.offsetWidth;

    let x = e.clientX - fieldRect.left - ballSize / 2;
    let y = e.clientY - fieldRect.top - ballSize / 2;

    x = Math.max(0, Math.min(x, field.offsetWidth - ballSize));
    y = Math.max(0, Math.min(y, field.offsetHeight - ballSize));

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
  });
}
