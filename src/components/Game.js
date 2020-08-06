import { SPACE, ballClass, barrierClass } from './../utils/constants';
import Ball from './Ball';
import Barrier from './Barrier';

export default class Game {
  _ballEl = new Ball(ballClass);
  _barrierEl = new Barrier(barrierClass);

  _ballPositon = {};
  _barrierPosition = {};

  _gameOverStatus = false;

  _handleGetBallPosition = () => {
    this._ballPositon = this._getPositionElem(this._ballEl);
  };

  _handleGetBarrierPosition = () => {
    this._barrierPosition = this._getPositionElem(this._barrierEl);
  };

  _handleCheckIntersection = () => {
    const { top: ballTop, left: ballLeft } = this._ballPositon;
    const { top: barrierTop, left: barrierLeft } = this._barrierPosition;

    if (
      ballTop === barrierTop ||
      ballLeft === barrierLeft ||
      ballTop === barrierLeft ||
      ballLeft === barrierTop
    ) {
      this._gameOverStatus = true;
      this._gameOver({ ballTop, ballLeft, barrierTop, barrierLeft });
    }
  };

  _gameOver({ ballTop, ballLeft, barrierTop, barrierLeft }) {
    console.log(this._gameOverStatus);
    this._clearIntevals();
    this._ballEl.setPosition({
      top: ballTop,
      left: ballLeft,
    });
    this._barrierEl.setPosition({
      top: barrierTop,
      left: barrierLeft,
    });
  }

  startGame() {
    this._handleAddListener();
    this._barrierEl.handleMove();
    this._setIntervals();
  }

  resetGame() {
    this._handleRemoveListener();
    this._ballEl.handleResetStatus();
    this._barrierEl.handleStopMove();
    this._clearIntevals();
    this._gameOverStatus = false;
  }

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

  _setIntervals() {
    this._handleIntervals = setInterval(() => {
      this._handleGetBallPosition();
      this._handleGetBarrierPosition();
      this._handleCheckIntersection();
    }, 10);
  }

  _clearIntevals() {
    clearInterval(this._handleIntervals);
  }
}
