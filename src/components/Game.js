import { SPACE, ballClass, barrierClass } from './../utils/constants';
import Ball from './Ball';
import Barrier from './Barrier';

export default class Game {
  _ballEl = new Ball(ballClass);
  _barrierEl = new Barrier(barrierClass);

  _ballPositon = this._getPositionElem(this._ballEl);
  _barrierPosition = this._getPositionElem(this._barrierEl);

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

  _getPositionElem(elem) {
    return { ...elem.getPosition() };
  }

  startGame() {
    this._handleAddListener();
    this._barrierEl.handleMove();
    this._barrierPosition = this._getPositionElem(this._barrierEl);
    this._handleTrackBallInterval = setInterval(() => {
      this._ballPositon = this._getPositionElem(this._ballEl);
      console.log(this._barrierPosition);
    }, 100);
    this._handleTrackBarrierInterval = setInterval(() => {
      this._barrierPosition = this._getPositionElem(this._barrierEl);
      console.log(this._ballPositon);
    }, 100);
  }

  resetGame() {
    this._handleRemoveListener();
    this._ballEl.handleResetStatus();
    this._barrierEl.handleStopMove();
    clearInterval(this._handleTrackBallInterval);
    clearInterval(this._handleTrackBarrierInterval);
  }
}
