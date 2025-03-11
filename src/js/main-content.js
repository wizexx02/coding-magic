import games from './data/games';

const filter = document.querySelector('[data-filter]');

const renderGames = (games, category) => {
  const gameContainer = document.querySelector('[data-games_container]');

  const filterGames = (games, category = 'all') => {
    if (category === 'all') {
      return games;
    }
    return games.filter(game => game.category === category);
  };

  const filteredGames = filterGames(games, category);

  gameContainer.innerHTML = filteredGames
    .map(
      game =>
        `<section class='section' id='${game.class}'>
    <div class="container ${game.class}__container game__container">
      <div class="game ${game.class}"></div>
    </div>
  </section>`
    )
    .join('');

  filteredGames.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderGames(games);
});

const filterHandler = event => {
  const category = event.target.dataset.category;

  switch (category) {
    case 'numerical':
      renderGames(games, 'numerical');

      break;
    case 'games':
      renderGames(games, 'game');

      break;
    case 'acquaintance':
      renderGames(games, 'acquaintance');

      break;

    default:
      renderGames(games);
  }
};

filter ? filter.addEventListener('click', filterHandler) : null;
