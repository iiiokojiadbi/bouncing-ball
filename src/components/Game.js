import {
  SPACE,
  barrierSelectors,
  ballSelectors,
  gameShowSelectors,
  gameSectionSelector,
} from './../utils/constants';
import { checkIntersection } from './../utils/checkIntersection';
import Ball from './Ball';
import Barrier from './Barrier';
import ShowFail from './ShowFail';
import Section from './Section';

export default class Game {
  _ballEl = new Ball(ballSelectors, 50, 50);
  _barrierEl = new Barrier(barrierSelectors, 30, 30);
  _showFail = new ShowFail(gameShowSelectors);
  _checkIntersection = checkIntersection;
  _ballPositon = {};
  _barrierPosition = {};
  _gameOverStatus = false;
  _gameSection = new Section(
    {
      items: this._renderBarriers(),
      rendered: (item) => {
        if (!item) {
          this._showFail.showFail();
          this._gameSection.resetItems();
          return;
        }
        const itemElem = item.getElem();
        itemElem.classList.add('barrier_is_move');
        this._gameSection.addItem(itemElem);
      },
      setItem: (item) => {
        this._setItem(item);
      },
    },
    gameSectionSelector
  );

  _renderBarriers() {
    const countBarriers = 10;
    let arrBarriers = [];

    for (let i = 0; i < countBarriers; i++) {
      arrBarriers = [this._getBarrier(), ...arrBarriers];
    }

    return arrBarriers;
  }

  _getRandomSize() {
    return Math.floor(Math.random() * 100 + 30);
  }

  _getBarrier() {
    const width = this._getRandomSize();
    const height = this._getRandomSize();

    return new Barrier(barrierSelectors, width, height);
  }

  _setItem = (barrier) => {
    if (!barrier) {
      return;
    }
    this._barrierEl = barrier;
    this._barrierEl.handleMove();
  };

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

  _gameOver = ({ ballTop, ballLeft, barrierTop, barrierLeft }) => {
    this._clearIntevals();
    this._showFail.showFail();
    this._ballEl.setPosition({
      top: ballTop,
      left: ballLeft,
    });
    this._barrierEl.setPosition({
      top: barrierTop,
      left: barrierLeft,
    });
    this._gameSection.resetItems();
  };

  startGame() {
    this._handleAddListener();
    this._setIntervals();
    this._gameSection.renderItems();
  }

  resetGame() {
    this._handleRemoveListener();
    this._gameSection.resetItems();
    this._ballEl.handleResetStatus();
    this._barrierEl.handleStopMove();
    this._showFail.hideFail();
    this._clearIntevals();
    this._gameOverStatus = false;
    this._barrierEl = new Barrier(barrierSelectors, 30, 30);
    this._gameSection.setItems(this._renderBarriers());
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
