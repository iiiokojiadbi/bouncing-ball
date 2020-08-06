import './index.css';
import { btnStartClass, btnResetClass } from './utils/constants';
import Game from './components/Game';

const btnStart = document.querySelector(btnStartClass);
const btnReset = document.querySelector(btnResetClass);

const game = new Game();

function toogleBtnStatus(btn) {
  btn.classList.toggle('btn_is_disabled');
  btn.classList.toggle('btn_is_active');
}

btnStart.addEventListener('click', () => {
  toogleBtnStatus(btnStart);
  btnStart.setAttribute('disabled', 'disabled');
  game.startGame();
});
btnReset.addEventListener('click', () => {
  toogleBtnStatus(btnStart);
  btnStart.removeAttribute('disabled');

  game.resetGame();
});
