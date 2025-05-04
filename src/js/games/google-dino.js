class GoogleDinosaur {
  constructor(dino, gameArea) {
    this.dino = dino;
    this.gameArea = gameArea;
    this.score = 0;
    this.gameOver = false;
    this.isJumping = false;

    this.gameModalStart();
  }

  init() {
    document.addEventListener('keydown', event => {
      if (event.code === 'Space' && !this.isJumping && !this.gameOver) {
        event.preventDefault();
        this.jump();
      }
    });
    this.gameArea.addEventListener('mousedown', () => {
      if (!this.isJumping && !this.gameOver) {
        this.jump();
      }
    });
    this.renderObstacles();
    this.checkCollision();
  }

  jump() {
    this.isJumping = true;
    this.dino.classList.add('jump');

    setTimeout(() => {
      this.isJumping = false;
      this.dino.classList.remove('jump');
    }, 500);
  }

  checkCollision() {
    const gameProcess = () => {
      if (this.gameOver === true) return;
      const obstacle = this.gameArea.querySelector('.cactus');
      const obstacleRect = obstacle.getBoundingClientRect();
      const dinoRect = this.dino.getBoundingClientRect();
      if (
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top
      ) {
        this.endGame(obstacle);
        return;
      }

      requestAnimationFrame(gameProcess);
    };
    requestAnimationFrame(gameProcess);
  }

  renderObstacles() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('cactus');
    obstacle.style.height = this.randomHeight();
    this.gameArea.appendChild(obstacle);

    const animationHandler = () => {
      obstacle.removeEventListener('animationiteration', animationHandler);
      this.gameArea.removeChild(obstacle);
      if (!this.gameOver) {
        this.updateScore();
        this.renderObstacles();
      }
    };
    obstacle.addEventListener('animationiteration', animationHandler);
  }

  randomHeight() {
    return `${Math.random() * (70 - 40) + 30}px`;
  }

  endGame(obstacle) {
    obstacle.style.animationPlayState = 'paused';
    this.gameOver = true;
    this.gameOverModal();
  }
  updateScore() {
    const scoreElement =
      this.gameArea.parentElement.querySelector('.dino-score');
    this.score += 1;
    scoreElement.textContent = `Рахунок: ${this.score}`;
  }
  resetScore() {
    this.score = 0;
    const scoreElement =
      this.gameArea.parentElement.querySelector('.dino-score');
    scoreElement.textContent = `Рахунок: ${this.score}`;
  }

  createModal(message, buttonText, buttonCallback) {
    const modalHtml = `
      <div class="dinosaur__modal">
        <p class="dinosaur__message">${message}</p>
        <button class="dinosaur__start button">${buttonText}</button>
      </div>
    `;
    this.gameArea.insertAdjacentHTML('beforeend', modalHtml);

    const modal = this.gameArea.querySelector('.dinosaur__modal');
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);

    const retryButton = this.gameArea.querySelector('.dinosaur__start');
    retryButton.addEventListener('click', buttonCallback);
  }
  gameModalStart() {
    this.createModal('Google динозаврик!', 'Почати гру!', () => {
      const modal = this.gameArea.querySelector('.dinosaur__modal');
      modal.classList.remove('show');
      setTimeout(() => {
        modal.remove();
      }, 250);
      this.init();
    });
  }
  gameOverModal() {
    this.createModal('Ви програли!', 'Спробувати знову', () =>
      this.restartGame()
    );
  }

  restartGame() {
    this.gameArea.querySelector('.dinosaur__modal').remove();
    this.gameArea.querySelector('.cactus').remove();
    this.gameOver = false;
    this.resetScore();
    this.renderObstacles();
    this.checkCollision();
  }
}

export const googleDinoInit = () => {
  const gameContainer = document.querySelector('.google-dinosaur');
  const gameHtml = `<div class="google-dinosaur__container">
                        <h2 class="game__title">Google динозавр</h2>
                        <p class="dino-score">Рахунок: 0</p>
                        <div class="google-dinosaur__area">
                        <div class="dino"></div></div> 
                    </div>`;
  gameContainer.innerHTML = gameHtml;

  const dino = gameContainer.querySelector('.dino');
  const gameArea = document.querySelector('.google-dinosaur__area');
  new GoogleDinosaur(dino, gameArea);
};
