import scientists from '../data/scientist.js';
export const scientistInit = () => {
  const gameContainer = document.querySelector('.scientist');

  const filtersData = [
    { title: 'Які вчені народилися в 19 ст.', action: 'born-in-19' },
    {
      title: 'Знайти рік народження Albert Einshtein',
      action: 'albert-einshtein-born',
    },
    { title: 'Відсортувати вчених за алфавітом', action: 'alphabit' },
    {
      title: 'Знайти вчених, прізвища яких починаються на літеру “С”',
      action: 'start-by-c',
    },
    {
      title: 'Відсортувати вчених за кількістю прожитих років',
      action: 'life-time',
    },
    {
      title: 'Видалити всіх вчених, ім’я яких починається на “А”',
      action: 'start-by-a',
    },
    {
      title: 'Знайти вченого, який народився найпізніше',
      action: 'born-last',
    },

    {
      title:
        'Знайти вченого, який прожив найдовше і вченого, який прожив найменше',
      action: 'shortest-and-longests-life',
    },
    {
      title: 'Знайти вчених, в яких співпадають перші літери імені і прізвища',
      action: 'similar',
    },
  ];

  const gameHtml = `<div class="scientists__container">
    <h2 class="game__title">Обери вченого/их</h2>
       <ul class="scientists__list"></ul>
       <ul class="scientists__filters-list" data-filters>
       ${filtersData
         .map(
           filter => `<li class="scientist__filters-item">  
            <button class="scientist__filters-button" data-action='${filter.action}'>
              ${filter.title}
            </button>
        </li>`
         )
         .join('')}
       </ul>
    </div>`;

  gameContainer.innerHTML = gameHtml;

  const scientistList = gameContainer.querySelector('.scientists__list');
  const buttons = gameContainer.querySelector('[data-filters]');

  const renderScientist = array => {
    scientistList.innerHTML = array
      .map(
        scientist => `<li class="scientists__item">  
            <article class="scientist-card">
                <div class="scientist-card__bg" style="background-image: url(${scientist.photo})"></div>
                <div class="scientist-card__meta">
                    <p class="scientist-card__name">${scientist.name} ${scientist.surname}</p>
                    <p class="scientist-card__date">${scientist.born}-${scientist.dead}</p>
                </div>
            </article>
        </li>`
      )
      .join('');
  };
  renderScientist(scientists);

  const actions = {
    'born-in-19': () =>
      scientists.filter(
        scientist => scientist.born > 1799 && scientist.born < 1900
      ),
    alphabit: () =>
      [...scientists].sort((a, b) => a.name.localeCompare(b.name)),
    'life-time': () =>
      [...scientists].sort((a, b) => b.dead - b.born - (a.dead - a.born)),
    'born-last': () => [
      scientists.reduce((latest, scientist) =>
        scientist.born > latest.born ? scientist : latest
      ),
    ],
    'albert-einshtein-born': () =>
      scientists.filter(
        scientist =>
          scientist.name === 'Albert' && scientist.surname === 'Einstein'
      ),
    'start-by-c': () =>
      scientists.filter(scientist => scientist.surname.startsWith('C')),
    'start-by-a': () =>
      scientists.filter(scientist => !scientist.name.startsWith('A')),
    'shortest-and-longests-life': () => {
      const sorted = [...scientists].sort(
        (a, b) => b.dead - b.born - (a.dead - a.born)
      );
      return [sorted[0], sorted[sorted.length - 1]];
    },
    similar: () =>
      scientists.filter(
        scientist => scientist.name.charAt(0) === scientist.surname.charAt(0)
      ),
  };

  const buttonHandler = event => {
    const action = event.target.dataset.action;
    if (actions[action]) {
      const result = actions[action]();
      renderScientist(result);
    }
  };

  buttons.addEventListener('click', buttonHandler);
};
