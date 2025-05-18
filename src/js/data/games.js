import { rockPaperScissorsInit } from '../games/rock-paper-scissors';
import { guessNumberInit } from '../games/guess-number';
import { googleDinoInit } from '../games/google-dino';
import { timeCalculatorInit } from '../games/time-calculate';
import { calculatorInit } from '../games/calculator';
import { scientistInit } from '../games/scientist';
import { maxNumberGameInit } from '../games/maxnumbe';
import { teamInit } from '../games/team';

export default [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
    class: 'leap-year',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
    class: 'guess-number',
    init: guessNumberInit,
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
    class: 'rock-paper-scissors',
    init: rockPaperScissorsInit,
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
    class: 'calculator',
    init: calculatorInit,
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
    class: 'time-calculator',
    init: timeCalculatorInit,
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
    class: 'google-dinosaur',
    init: googleDinoInit,
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
    class: 'soccer',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
    class: 'biggest-number',
    init: maxNumberGameInit,
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
    class: 'our-team',
    init: teamInit,
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
    class: 'scientist',
    init: scientistInit,
  },
];
