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

// основной компонент отвечающий за всю логику мини-игры

export default class Game {
  _ballEl = new Ball(ballSelectors, 50, 50);
  _barrierEl = new Barrier(barrierSelectors);
  _showFail = new ShowFail(gameShowSelectors);
  _checkIntersection = checkIntersection;
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
        itemElem.classList.add(barrierSelectors.barrierMove);
        this._gameSection.addItem(itemElem);
      },
      setItem: (item) => {
        this._setItem(item);
      },
    },
    gameSectionSelector
  );

  //метод для старта игры
  startGame() {
    if (!this._gameOverStatus) {
      this._handleAddListener();
      this._setIntervals();
      this._gameSection.renderItems();
    }
  }

  //метод для сброса игры
  resetGame() {
    this._gameSection.resetItems();
    this._gameSection.stopRender();
    this._handleRemoveListener();
    this._ballEl.handleResetStatus();
    this._barrierEl.handleResetStatus();
    this._showFail.hideFail();
    this._clearIntevals();
    this._gameOverStatus = false;
    this._barrierEl = new Barrier(barrierSelectors);
    this._gameSection.setItems(this._renderBarriers());
  }

  //внутренний метод для создания барьеров
  _renderBarriers() {
    const countBarriers = 10;
    let arrBarriers = [];

    for (let i = 0; i < countBarriers; i++) {
      arrBarriers = [this._getBarrier(), ...arrBarriers];
    }

    return arrBarriers;
  }

  //внутренний метод для получения нового барьера
  _getBarrier() {
    return new Barrier(barrierSelectors);
  }

  //внутренний метод для установки барьера в текущий this._barrierEl
  //и вызова метода установки состояния движения
  _setItem = (barrier) => {
    if (!barrier) {
      return;
    }
    this._barrierEl = barrier;
    this._barrierEl.handleMove();
  };

  //метод проверяющий вхождение мяча в барьер
  _handleCheckIntersection = () => {
    const {
      top: ballTop,
      left: ballLeft,
      coordPoints: coordPointsBall,
    } = this._ballEl.getPosition();
    const {
      top: barrierTop,
      left: barrierLeft,
      coordPoints: coordPointsBarrier,
    } = this._barrierEl.getPosition();
    if (this._checkIntersection(coordPointsBall, coordPointsBarrier)) {
      this._gameOverStatus = true;
      this._gameOver({ ballTop, ballLeft, barrierTop, barrierLeft });
    }
  };

  //внутренний метод вызова конца игры
  _gameOver = ({ ballTop, ballLeft, barrierTop, barrierLeft }) => {
    this._clearIntevals();
    this._gameSection.stopRender();
    this._showFail.showFail();
    this._ballEl.setPosition({
      top: ballTop,
      left: ballLeft,
    });
    this._barrierEl.setPosition({
      top: barrierTop,
      left: barrierLeft,
    });
  };

  //внутренний метод проверки нажатия на пробел
  _handlePressSpace = (evt) => {
    if (evt.code === SPACE) {
      this._ballEl.handleJump();
    }
  };

  //внутренний метод для добавления слушателя на документ
  _handleAddListener() {
    document.addEventListener('keydown', this._handlePressSpace);
  }

  //внутренний метод для удаления слушателя с документа
  _handleRemoveListener() {
    document.removeEventListener('keydown', this._handlePressSpace);
  }

  //внутренний метод для установки интервала
  _setIntervals() {
    this._handleIntervals = setInterval(() => {
      this._handleCheckIntersection();
    }, 100);
  }

  //внутренний метод для отчистки интервала
  _clearIntevals() {
    clearInterval(this._handleIntervals);
  }
}
