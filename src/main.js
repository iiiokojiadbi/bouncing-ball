import './index.css';
import { btnStartSelector, btnResetSelector } from './utils/constants';
import Game from './components/Game';

const btnStart = document.querySelector(btnStartSelector);
const btnReset = document.querySelector(btnResetSelector);

const game = new Game();

function toogleBtnStatus(btn) {
  if (btn.classList.contains('btn_is_active')) {
    btn.setAttribute('disabled', 'disabled');
  } else {
    btn.removeAttribute('disabled');
  }
  btn.classList.toggle('btn_is_disabled');
  btn.classList.toggle('btn_is_active');
}

btnStart.addEventListener('click', () => {
  toogleBtnStatus(btnStart);
  toogleBtnStatus(btnReset);

  game.startGame();
});
btnReset.addEventListener('click', () => {
  toogleBtnStatus(btnStart);
  toogleBtnStatus(btnReset);

  game.resetGame();
});
