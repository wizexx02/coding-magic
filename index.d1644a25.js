!function(){function e(e){return e&&e.__esModule?e.default:e}var t=document.querySelector(".header__list-button"),a=document.querySelector("[data-filter]"),n=!1;t.addEventListener("click",(function(){n?(a.style.opacity="0",a.style.pointerEvents="none"):(a.style.opacity="1",a.style.pointerEvents="auto"),n=!n}));var r=function(){var e=Math.floor(10*Math.random()+1);document.querySelector(".guess-number").innerHTML='\n  <div class="guess-number__container">\n    <h2 class="game__title">Вгадай число, яке загадав комп’ютер</h2>\n    <div class="guess-number__wrapper">\n        <form class="guess-number__form" data-guess_number_form>\n          <input class="guess-number__input" type="number" max="10" min="0" required name="guessNumber" placeholder="Введіть число"/>\n          <button class="guess-number__button" name="guessNumberButton">S</button>\n        </form>\n    </div>\n    <button class="guess-number__restart";">Перезапустити гру</button>\n    </div>';var t=document.querySelector("[data-guess_number_form]"),a=document.querySelector(".guess-number__restart"),n=function(n){n.preventDefault();var r=n.target,o=r.guessNumber,c=parseInt(o.value);e===c?t.insertAdjacentHTML("afterend",'<p class="guess-number__message">Вітаю, ви вгадали число! ('.concat(e,")</p>")):t.insertAdjacentHTML("afterend",'<p class="guess-number__message guess-number__message--error">Ви програли, комп’ютер загадав  ('.concat(e,")</p>")),a.classList.add("guess-number__restart--show"),r.guessNumber.disabled=!0,r.guessNumberButton.disabled=!0},o=function(){t.removeEventListener("submit",n),a.removeEventListener("click",o),r()};t.addEventListener("submit",n),a.addEventListener("click",o)},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var c={};function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,a){t&&i(e.prototype,t);a&&i(e,a);return e};var s=function(){"use strict";function t(a,n){e(o)(this,t),this.dino=a,this.gameArea=n,this.score=0,this.gameOver=!1,this.isJumping=!1,this.gameModalStart()}return e(c)(t,[{key:"init",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Space"!==t.code||e.isJumping||e.gameOver||e.jump()})),this.gameArea.addEventListener("mousedown",(function(){e.isJumping||e.gameOver||e.jump()})),this.renderObstacles(),this.checkCollision()}},{key:"jump",value:function(){var e=this;this.isJumping=!0,this.dino.classList.add("jump"),setTimeout((function(){e.isJumping=!1,e.dino.classList.remove("jump")}),500)}},{key:"checkCollision",value:function(){var e=this,t=function(){if(!0!==e.gameOver){var a=e.gameArea.querySelector(".cactus"),n=a.getBoundingClientRect(),r=e.dino.getBoundingClientRect();r.right>n.left&&r.left<n.right&&r.bottom>n.top?e.endGame(a):requestAnimationFrame(t)}};requestAnimationFrame(t)}},{key:"renderObstacles",value:function(){var e=this,t=document.createElement("div");t.classList.add("cactus"),t.style.height=this.randomHeight(),this.gameArea.appendChild(t);var a=function(){t.removeEventListener("animationiteration",a),e.gameArea.removeChild(t),e.gameOver||(e.updateScore(),e.renderObstacles())};t.addEventListener("animationiteration",a)}},{key:"randomHeight",value:function(){return"".concat(30*Math.random()+40,"px")}},{key:"endGame",value:function(e){e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}},{key:"updateScore",value:function(){var e=this.gameArea.parentElement.querySelector(".dino-score");this.score+=1,e.textContent="Рахунок: ".concat(this.score)}},{key:"resetScore",value:function(){this.score=0,this.gameArea.parentElement.querySelector(".dino-score").textContent="Рахунок: ".concat(this.score)}},{key:"createModal",value:function(e,t,a){var n='\n      <div class="dinosaur__modal">\n        <p class="dinosaur__message">'.concat(e,'</p>\n        <button class="dinosaur__start button">').concat(t,"</button>\n      </div>\n    ");this.gameArea.insertAdjacentHTML("beforeend",n);var r=this.gameArea.querySelector(".dinosaur__modal");setTimeout((function(){r.classList.add("show")}),10),this.gameArea.querySelector(".dinosaur__start").addEventListener("click",a)}},{key:"gameModalStart",value:function(){var e=this;this.createModal("Google динозаврик!","Почати гру!",(function(){var t=e.gameArea.querySelector(".dinosaur__modal");t.classList.remove("show"),setTimeout((function(){t.remove()}),250),e.init()}))}},{key:"gameOverModal",value:function(){var e=this;this.createModal("Ви програли!","Спробувати знову",(function(){return e.restartGame()}))}},{key:"restartGame",value:function(){this.gameArea.querySelector(".dinosaur__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.resetScore(),this.renderObstacles(),this.checkCollision()}}]),t}(),u=[{id:1,name:"Високосний калькулятор",category:"numerical",class:"leap-year"},{id:2,name:"Вгадай число",category:"numerical",class:"guess-number",init:r},{id:3,name:"Камінь-Ножиці-Папір",category:"game",class:"rock-paper-scissors"},{id:4,name:"Калькулятор",category:"numerical",class:"calculator",init:function(){var e="";document.querySelector(".calculator").innerHTML='\n  <div class="calculator__container">\n    <h2 class="game__title">Калькулятор</h2>\n        <form class="calculator__form" data-calculator_form>\n          <input class="calculator__input" type="number" required name="firstNumberField" placeholder="Введіть число"/>\n\n          <ul class="calculator__actions" data-actions>\n            <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="sum">+</button>\n            </li>\n             <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="product ">*</button>\n            </li>\n             <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="difference">-</button>\n            </li>\n             <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="quotient">/</button>\n            </li>\n          </ul>\n          <input class="calculator__input" type="number" required name="secondNumberField" placeholder="Введіть число"/>\n\n          <button class="calculator__button" type="button" data-result="result">=</button>\n\n          <div class="calculator__result"><p data-output>Результат</p></div>\n        </form>\n    </div>';var t=document.querySelector("[data-calculator_form]"),a=document.querySelector("[data-output]");t.addEventListener("click",(function(n){var r=n.target;if(r.dataset.action&&(e=r.dataset.action),r.dataset.result){if(!e)return void alert("Оберіть дію!");var o=parseFloat(t.firstNumberField.value),c=parseFloat(t.secondNumberField.value);if(isNaN(o)||isNaN(c))return void alert("Будь ласка, введіть обидва числа");var i=function(e,t,a){console.log(e,t,a);var n=0;switch(a){case"sum":n=e+t;break;case"product ":n=e*t;break;case"difference":n=e-t;break;case"quotient":n=t?e/t:null}return n}(o,c,e);a.textContent=null!==i?"Результат: ".concat(i):"На нуль ділити не можна!",e="",t.firstNumberField.value="",t.secondNumberField.value=""}}))}},{id:5,name:"Калькулятор часу",category:"numerical",class:"time-calculator",init:function(){document.querySelector(".time-calculator").innerHTML='\n    <div class="time-calculator__container">\n      <h2 class="game__title">Калькулятор часу</h2>\n      <div class="time-calculator__wrapper">\n        <form class="time-calculator__form" data-time_calculate_form>\n            <input class="time-calculator__input" type="number" required name="totalMinutes" placeholder="Введіть число"/>\n            <button class="time-calculator__button" name="timeCalculatorNumberButton">S</button>\n        </form>\n        <div class="time-calculator__result"><p data-time_calculator_output>Результат</p></div>\n       </div>\n    </div>';var e=document.querySelector("[data-time_calculate_form]"),t=document.querySelector("[data-time_calculator_output]");e.addEventListener("submit",(function(e){e.preventDefault();var a=e.target,n=a.totalMinutes,r=parseInt(n.value);if(isNaN(r)||r<0)t.textContent="Будь ласка, введіть коректне число.";else{var o=Math.floor(r/1440),c=r%1440,i=Math.floor(c/60),s=c%60;t.textContent=o>0?"".concat(o," дн. ").concat(i.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")):"".concat(i.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")),a.reset()}}))}},{id:6,name:"Google динозаврик",category:"game",class:"google-dinosaur",init:function(){var e=document.querySelector(".google-dinosaur");e.innerHTML='<div class="google-dinosaur__container">\n                        <h2 class="game__title">Google динозавр</h2>\n                        <p class="dino-score">Рахунок: 0</p>\n                        <div class="google-dinosaur__area">\n                        <div class="dino"></div></div> \n                    </div>';var t=e.querySelector(".dino"),a=document.querySelector(".google-dinosaur__area");new s(t,a)}},{id:7,name:"Футбол",category:"game",class:"soccer"},{id:8,name:"Найбільше число",category:"numerical",class:"biggest-number"},{id:9,name:"Наша команда",category:"acquaintance",class:"our-team"},{id:10,name:"Вчений",category:"acquaintance",class:"scientist"}],l=document.querySelector("[data-filter]"),d=function(e,t){var a=document.querySelector("[data-games_container]"),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";return"all"===t?e:e.filter((function(e){return e.category===t}))}(e,t);a.innerHTML=n.map((function(e){return"<section class='section' id='".concat(e.class,'\'>\n           <div class="container">\n            <div class="game ').concat(e.class,'"></div>\n           </div>\n          </section>')})).join(""),n.forEach((function(e){e.init&&e.init()}))};document.addEventListener("DOMContentLoaded",(function(){d(u)}));l&&l.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName)switch(e.target.dataset.category){case"numerical":d(u,"numerical");break;case"game":d(u,"game");break;case"acquaintance":d(u,"acquaintance");break;default:d(u)}}))}();
//# sourceMappingURL=index.d1644a25.js.map
