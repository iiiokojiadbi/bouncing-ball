import { SPACE, ballClass, barrierClass } from './../utils/constants';
import Ball from './Ball';
import Barrier from './Barrier';

export default class Game {
  _ballEl = new Ball(ballClass);
  _barrierEl = new Barrier(barrierClass);

  _handlePressSpace = (evt) => {
    if (evt.code === SPACE) {
      this._ballEl.handleJump();
    }
  };

  _handleAddListener() {
    document.addEventListener('keydown', this._handlePressSpace);
  }

  _handleRemoveListener() {
    document.removeEventListener('keydown', this._handlePressSpace);
  }

  startGame() {
    this._handleAddListener();
    this._barrierEl.handleMove();
  }

  resetGame() {
    this._handleRemoveListener();
    this._ballEl.handleResetStatus();
    this._barrierEl.handleStopMove();
  }
}
