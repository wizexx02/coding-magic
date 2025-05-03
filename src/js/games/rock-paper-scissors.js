export const rockPaperScissorsInit = () => {
  const gameContainer = document.querySelector('.rock-paper-scissors');
  const gameHtml = `
  <div class="rock__container">
    <h2 class="game__title">Камінь - ножиці - папір</h2>
    <div class="rock__content-wrapper">
      <div class="rock__wrapper">
        <button class="rock__button rock__button--rock" id="rock"></button>
        <button class="rock__button rock__button--scissors" id="scissors"></button>
        <button class="rock__button rock__button--paper" id="paper"></button>
      <div class="rock__score" id="score">
        <h3 class="rock__counter">Рахунок:</h3>
        <p>Гравець - <span id="player-score">0</span></p>
        <p>Комп'ютер - <span id="computer-score">0</span></p>
      </div>
        </div>
      <p class="rock__result" id="result"></p>
      <button class="rock__button rock__button-start" id="start">Хід комп’ютера</button>
    </div>
  </div>
`;

  gameContainer.innerHTML = gameHtml;

  let playerScore = 0;
  let computerScore = 0;
  let playerChoice = null;

  const choices = ['Камінь', 'Ножиці', 'Папір'];
  const resultEl = document.getElementById('result');

  document
    .getElementById('rock')
    .addEventListener('click', () => selectChoice('Камінь'));
  document
    .getElementById('scissors')
    .addEventListener('click', () => selectChoice('Ножиці'));
  document
    .getElementById('paper')
    .addEventListener('click', () => selectChoice('Папір'));

  document.getElementById('start').addEventListener('click', () => {
    if (!playerChoice) {
      alert('Спочатку оберіть ваш варіант!');
      return;
    }
    playGame();
  });

  function selectChoice(choice) {
    playerChoice = choice;
    resultEl.innerHTML = '';
  }

  function playGame() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
      playerChoice = null;
      return;
    }

    let result = '';

    if (
      (playerChoice === 'Камінь' && computerChoice === 'Ножиці') ||
      (playerChoice === 'Ножиці' && computerChoice === 'Папір') ||
      (playerChoice === 'Папір' && computerChoice === 'Камінь')
    ) {
      resultEl.classList.remove('result__lose');
      result = 'Ви виграли раунд!';
      playerScore++;
      resultEl.classList.add('result__win');
    } else {
      resultEl.classList.remove('result__win');
      result = 'Комп’ютер виграв раунд!';
      computerScore++;
      resultEl.classList.add('result__lose');
    }

    resultEl.innerHTML = `<strong>${result}</strong>`;
    document.getElementById('computer-score').innerText = `${computerScore}`;
    document.getElementById('player-score').innerText = `${playerScore}`;
    playerChoice = null;
  }
};
