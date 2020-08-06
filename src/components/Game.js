import { SPACE } from './../utils/constants';
import Ball from './Ball';

export default class Game {
  _ballEl = new Ball();

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
  }

  resetGame() {
    this._handleRemoveListener();
    this._ballEl.handleResetStatus();
  }
}
