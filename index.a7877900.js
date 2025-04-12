const e=document.querySelector(".header__list-button"),t=document.querySelector("[data-filter]");let a=!1;e.addEventListener("click",(()=>{a?(t.style.opacity="0",t.style.pointerEvents="none"):(t.style.opacity="1",t.style.pointerEvents="auto"),a=!a}));const s=()=>{const e=Math.floor(10*Math.random()+1);document.querySelector(".guess-number").innerHTML='\n  <div class="guess-number__container">\n    <h2 class="game__title">Вгадай число, яке загадав комп’ютер</h2>\n    <div class="guess-number__wrapper">\n        <form class="guess-number__form" data-guess_number_form>\n          <input class="guess-number__input" type="number" max="10" min="0" required name="guessNumber" placeholder="Введіть число"/>\n          <button class="guess-number__button" name="guessNumberButton">S</button>\n        </form>\n    </div>\n    <button class="guess-number__restart";">Перезапустити гру</button>\n    </div>';const t=document.querySelector("[data-guess_number_form]"),a=document.querySelector(".guess-number__restart"),n=s=>{s.preventDefault();const n=s.target,r=n.guessNumber,o=parseInt(r.value);e===o?t.insertAdjacentHTML("afterend",`<p class="guess-number__message">Вітаю, ви вгадали число! (${e})</p>`):t.insertAdjacentHTML("afterend",`<p class="guess-number__message guess-number__message--error">Ви програли, комп’ютер загадав  (${e})</p>`),a.classList.add("guess-number__restart--show"),n.guessNumber.disabled=!0,n.guessNumberButton.disabled=!0},r=()=>{t.removeEventListener("submit",n),a.removeEventListener("click",r),s()};t.addEventListener("submit",n),a.addEventListener("click",r)};class n{init(){document.addEventListener("keydown",(e=>{"Space"!==e.code||this.isJumping||this.gameOver||this.jump()})),this.gameArea.addEventListener("mousedown",(()=>{this.isJumping||this.gameOver||this.jump()})),this.renderObstacles(),this.checkCollision()}jump(){this.isJumping=!0,this.dino.classList.add("jump"),setTimeout((()=>{this.isJumping=!1,this.dino.classList.remove("jump")}),500)}checkCollision(){const e=()=>{if(!0===this.gameOver)return;const t=this.gameArea.querySelector(".cactus"),a=t.getBoundingClientRect(),s=this.dino.getBoundingClientRect();s.right>a.left&&s.left<a.right&&s.bottom>a.top?this.endGame(t):requestAnimationFrame(e)};requestAnimationFrame(e)}renderObstacles(){const e=document.createElement("div");e.classList.add("cactus"),e.style.height=this.randomHeight(),this.gameArea.appendChild(e);const t=()=>{e.removeEventListener("animationiteration",t),this.gameArea.removeChild(e),this.gameOver||(this.updateScore(),this.renderObstacles())};e.addEventListener("animationiteration",t)}randomHeight(){return 30*Math.random()+40+"px"}endGame(e){e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}updateScore(){const e=this.gameArea.parentElement.querySelector(".dino-score");this.score+=1,e.textContent=`Рахунок: ${this.score}`}resetScore(){this.score=0;this.gameArea.parentElement.querySelector(".dino-score").textContent=`Рахунок: ${this.score}`}createModal(e,t,a){const s=`\n      <div class="dinosaur__modal">\n        <p class="dinosaur__message">${e}</p>\n        <button class="dinosaur__start button">${t}</button>\n      </div>\n    `;this.gameArea.insertAdjacentHTML("beforeend",s);const n=this.gameArea.querySelector(".dinosaur__modal");setTimeout((()=>{n.classList.add("show")}),10);this.gameArea.querySelector(".dinosaur__start").addEventListener("click",a)}gameModalStart(){this.createModal("Google динозаврик!","Почати гру!",(()=>{const e=this.gameArea.querySelector(".dinosaur__modal");e.classList.remove("show"),setTimeout((()=>{e.remove()}),250),this.init()}))}gameOverModal(){this.createModal("Ви програли!","Спробувати знову",(()=>this.restartGame()))}restartGame(){this.gameArea.querySelector(".dinosaur__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.resetScore(),this.renderObstacles(),this.checkCollision()}constructor(e,t){this.dino=e,this.gameArea=t,this.score=0,this.gameOver=!1,this.isJumping=!1,this.gameModalStart()}}var r=[{id:1,name:"Високосний калькулятор",category:"numerical",class:"leap-year"},{id:2,name:"Вгадай число",category:"numerical",class:"guess-number",init:s},{id:3,name:"Камінь-Ножиці-Папір",category:"game",class:"rock-paper-scissors"},{id:4,name:"Калькулятор",category:"numerical",class:"calculator",init:()=>{let e="";document.querySelector(".calculator").innerHTML='\n  <div class="calculator__container">\n    <h2 class="game__title">Калькулятор</h2>\n        <form class="calculator__form" data-calculator_form>\n          <input class="calculator__input" type="number" required name="firstNumberField" placeholder="Введіть число"/>\n\n          <ul class="calculator__actions" data-actions>\n            <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="sum">+</button>\n            </li>\n             <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="product ">*</button>\n            </li>\n             <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="difference">-</button>\n            </li>\n             <li class="calculator__action">\n                <button class="calculator__button" type="button" data-action="quotient">/</button>\n            </li>\n          </ul>\n          <input class="calculator__input" type="number" required name="secondNumberField" placeholder="Введіть число"/>\n\n          <button class="calculator__button" type="button" data-result="result">=</button>\n\n          <div class="calculator__result"><p data-output>Результат</p></div>\n        </form>\n    </div>';const t=document.querySelector("[data-calculator_form]"),a=document.querySelector("[data-output]");t.addEventListener("click",(s=>{const n=s.target;if(n.dataset.action&&(e=n.dataset.action),n.dataset.result){if(!e)return void alert("Оберіть дію!");const s=parseFloat(t.firstNumberField.value),n=parseFloat(t.secondNumberField.value);if(isNaN(s)||isNaN(n))return void alert("Будь ласка, введіть обидва числа");const r=((e,t,a)=>{console.log(e,t,a);let s=0;switch(a){case"sum":s=e+t;break;case"product ":s=e*t;break;case"difference":s=e-t;break;case"quotient":s=t?e/t:null}return s})(s,n,e);a.textContent=null!==r?`Результат: ${r}`:"На нуль ділити не можна!",e="",t.firstNumberField.value="",t.secondNumberField.value=""}}))}},{id:5,name:"Калькулятор часу",category:"numerical",class:"time-calculator",init:()=>{document.querySelector(".time-calculator").innerHTML='\n    <div class="time-calculator__container">\n      <h2 class="game__title">Калькулятор часу</h2>\n      <div class="time-calculator__wrapper">\n        <form class="time-calculator__form" data-time_calculate_form>\n            <input class="time-calculator__input" type="number" required name="totalMinutes" placeholder="Введіть число"/>\n            <button class="time-calculator__button" name="timeCalculatorNumberButton">S</button>\n        </form>\n        <div class="time-calculator__result"><p data-time_calculator_output>Результат</p></div>\n       </div>\n    </div>';const e=document.querySelector("[data-time_calculate_form]"),t=document.querySelector("[data-time_calculator_output]");e.addEventListener("submit",(e=>{e.preventDefault();const a=e.target,s=a.totalMinutes,n=parseInt(s.value);if(isNaN(n)||n<0)return void(t.textContent="Будь ласка, введіть коректне число.");const r=Math.floor(n/1440),o=n%1440,i=Math.floor(o/60),c=o%60;t.textContent=r>0?`${r} дн. ${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`:`${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`,a.reset()}))}},{id:6,name:"Google динозаврик",category:"game",class:"google-dinosaur",init:()=>{const e=document.querySelector(".google-dinosaur");e.innerHTML='<div class="google-dinosaur__container">\n                        <h2 class="game__title">Google динозавр</h2>\n                        <p class="dino-score">Рахунок: 0</p>\n                        <div class="google-dinosaur__area">\n                        <div class="dino"></div></div> \n                    </div>';const t=e.querySelector(".dino"),a=document.querySelector(".google-dinosaur__area");new n(t,a)}},{id:7,name:"Футбол",category:"game",class:"soccer"},{id:8,name:"Найбільше число",category:"numerical",class:"biggest-number"},{id:9,name:"Наша команда",category:"acquaintance",class:"our-team"},{id:10,name:"Вчений",category:"acquaintance",class:"scientist"}];const o=document.querySelector("[data-filter]"),i=(e,t)=>{const a=document.querySelector("[data-games_container]"),s=((e,t="all")=>"all"===t?e:e.filter((e=>e.category===t)))(e,t);a.innerHTML=s.map((e=>`<section class='section' id='${e.class}'>\n           <div class="container">\n            <div class="game ${e.class}"></div>\n           </div>\n          </section>`)).join(""),s.forEach((e=>{e.init&&e.init()}))};document.addEventListener("DOMContentLoaded",(()=>{i(r)}));o&&o.addEventListener("click",(e=>{if("BUTTON"===e.target.tagName){switch(e.target.dataset.category){case"numerical":i(r,"numerical");break;case"game":i(r,"game");break;case"acquaintance":i(r,"acquaintance");break;default:i(r)}}}));
//# sourceMappingURL=index.a7877900.js.map
