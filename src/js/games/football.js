export const footballGameInit = () => {
  const gameContainer = document.querySelector('.football-game');

  const gameHtml = `
      <div class="football-game__container" data-field style="position: relative; width: 100%; height: 400px;">
        <img src="" alt="ball" class="football-game__ball" data-ball
          style="position: absolute; width: 50px; height: 50px; top: 50%; left: 50%; transform: translate(-50%, -50%); cursor: pointer;" />
      </div>
    `;

  gameContainer.innerHTML = gameHtml;

  const ball = document.querySelector('[data-ball]');
  const field = document.querySelector('[data-field]');

  let isDragging = false;
  let velocity = { x: 0, y: 0 };
  let ballPos = { x: field.clientWidth / 2, y: field.clientHeight / 2 };

  field.addEventListener('mousedown', e => {
    if (e.target === ball) {
      isDragging = true;
    }
  });

  field.addEventListener('mouseup', () => {
    isDragging = false;
  });

  field.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  field.addEventListener('mousemove', e => {
    if (isDragging) {
      const rect = field.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // рассчитать вектор движения
      velocity.x = (mouseX - ballPos.x) * 0.1;
      velocity.y = (mouseY - ballPos.y) * 0.1;
    }
  });

  const update = () => {
    if (!isDragging) {
      // отскок от границ
      if (ballPos.x <= 0 || ballPos.x >= field.clientWidth - 50) {
        velocity.x *= -1;
      }
      if (ballPos.y <= 0 || ballPos.y >= field.clientHeight - 50) {
        velocity.y *= -1;
      }
    }

    ballPos.x += velocity.x;
    ballPos.y += velocity.y;

    // ограничение в пределах поля
    ballPos.x = Math.max(0, Math.min(ballPos.x, field.clientWidth - 50));
    ballPos.y = Math.max(0, Math.min(ballPos.y, field.clientHeight - 50));

    ball.style.left = `${ballPos.x}px`;
    ball.style.top = `${ballPos.y}px`;

    requestAnimationFrame(update);
  };

  update();
};
