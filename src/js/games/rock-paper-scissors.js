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
    </div>
    <p class="rock__result" id="result"></p>
    <div class="rock__score" id="score"><h3>Рахунок:</h3> <p>Гравець - <span id="player-score">0</span></p> <p>Комп'ютер - <span id="computer-score">0</span></p></div>
    </div>
  </div>
`;

  gameContainer.innerHTML = gameHtml;

  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;

  document
    .getElementById('rock')
    .addEventListener('click', () => playGame('Камінь'));
  document.getElementById('scissors').addEventListener('click', () => {
    playGame('Ножиці');
    console.log('work');
  });
  document
    .getElementById('paper')
    .addEventListener('click', () => playGame('Папір'));
  function playGame(playerChoice) {
    const choices = ['Камінь', 'Ножиці', 'Папір'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
      result = 'Нічия!';
    } else if (
      (playerChoice === 'Камінь' && computerChoice === 'Ножиці') ||
      (playerChoice === 'Ножиці' && computerChoice === 'Папір') ||
      (playerChoice === 'Папір' && computerChoice === 'Камінь')
    ) {
      result = 'Ви перемогли!';
      playerScore++;
    } else {
      result = "Комп'ютер переміг!";
      computerScore++;
    }

    document.getElementById(
      'result'
    ).innerHTML = `Ви вибрали: ${playerChoice} <br> Комп'ютер вибрав: ${computerChoice} <br> <strong>${result}</strong>`;
    document.getElementById('computer-score').innerText = `${computerScore}`;
    document.getElementById('player-score').innerText = `${playerScore}`;
  }
};
