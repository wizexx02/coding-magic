const gameHtml = `
  <div class="rock-paper-scissors__container">
    <h1 class="game__title">Гра "Камінь, ножиці, папір"</h1>
    <div class="choices">
        <button class="choice-button" id="rock">Камінь</button>
        <button class="choice-button" id="scissors">Ножиці</button>
        <button class="choice-button" id="paper">Папір</button>
    </div>
    <div class="result" id="result"></div>
    <div class="score" id="score">Рахунок: Гравець 0 - 0 Комп'ютер - 0 Нічиї</div>
  </div>
`;

gameContainer.innerHTML = gameHtml; // Вставляем HTML код в body

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('rock')
    .addEventListener('click', () => playGame('Камінь'));
  document
    .getElementById('scissors')
    .addEventListener('click', () => playGame('Ножиці'));
  document
    .getElementById('paper')
    .addEventListener('click', () => playGame('Папір'));
});

function playGame(playerChoice) {
  const choices = ['Камінь', 'Ножиці', 'Папір'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === computerChoice) {
    result = 'Нічия!';
    drawScore++;
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
  document.getElementById(
    'score'
  ).innerText = `Рахунок: Гравець ${playerScore} - ${computerScore} Комп'ютер - ${drawScore} Нічиї`;
}
