import './index.css';
import { btnStartClass, btnResetClass } from './utils/constants';
import Game from './components/Game';

const btnStart = document.querySelector(btnStartClass);
const btnReset = document.querySelector(btnResetClass);

const game = new Game();

btnStart.addEventListener('click', () => game.startGame());
btnReset.addEventListener('click', () => game.resetGame());
