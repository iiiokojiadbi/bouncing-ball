import { SPACE, barrierSelector, ballSelector } from './../utils/constants';
import { checkIntersection } from './../utils/checkIntersection';
import Ball from './Ball';
import Barrier from './Barrier';

export default class Game {
  _ballEl = new Ball(ballSelector, 50, 50);
  _barrierEl = new Barrier(barrierSelector, 30, 100);

  _checkIntersection = checkIntersection;

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
    const {
      top: ballTop,
      left: ballLeft,
      coordPoints: coordPointsBall,
    } = this._ballPositon;
    const {
      top: barrierTop,
      left: barrierLeft,
      coordPoints: coordPointsBarrier,
    } = this._barrierPosition;

    if (this._checkIntersection(coordPointsBall, coordPointsBarrier)) {
      this._gameOverStatus = true;
      this._gameOver({ ballTop, ballLeft, barrierTop, barrierLeft });
    }
  };

  _gameOver({ ballTop, ballLeft, barrierTop, barrierLeft }) {
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
    }, 100);
  }

  _clearIntevals() {
    clearInterval(this._handleIntervals);
  }
}
