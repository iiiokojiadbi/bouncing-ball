import './index.css';
import { btnStart, btnReser, btnReset } from './utils/constants';
import Game from './components/Game';

const game = new Game();

btnStart.addEventListener('click', () => game.startGame());
btnReset.addEventListener('click', () => game.resetGame());
