export const rockPaperScissorsInit = () => {
  const gameContainer = document.querySelector('.rock-paper-scissors');
  const gameHtml = `
  <div class="rock-paper-scissors__container">
    <h2 class="rock__title">Камінь - ножиці - папір</h2>
    <div class="rock__content-wrapper">
    <div class="rock__wrapper">
        <button class="rock__wrapper-button" id="rock"><img src="../../images/rock.png" alt="stone"></button>
        <button class="rock__wrapper-button" id="scissors"><img src="../../images/scissors.png" alt="scissors"></button>
        <button class="rock__wrapper-button" id="paper"><img src="../../images/paper.png" alt="paper"></button>
    </div>
    <div class="rock__result" id="result"></div>
    <div class="rock__score" id="score">Рахунок: Гравець - 0 Комп'ютер - 0 Нічиї - 0</div>
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
    ).innerText = `Рахунок: Гравець - ${playerScore} <br> Комп'ютер - ${computerScore} <br> Нічиї - ${drawScore}`;
  }
};
