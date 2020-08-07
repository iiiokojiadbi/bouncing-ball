import { ballSelectors } from '../utils/constants';

export default class Barrier {
  constructor(barrierSelectors, width, height) {
    this._barrierSelectors = barrierSelectors;
    this._elem = this._getTemplate();
    this._width = width;
    this._height = height;
    this._isMove = false;
  }

  handleMove = () => {
    this._isMove = true;
    this._setSizeBarrier();
    this._handleAddMove();
  };

  handleStopMove = () => {
    this._isMove = false;
    this._removeStyle();
    this._handleRemoveMove();
  };

  setPosition = ({ top, left }) => {
    this._handleRemoveMove();
    this._elem.style.top = top + 'px';
    this._elem.style.left = left + 'px';
  };

  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const coordPoints = {
      pointLT: { x: left, y: top },
      pointRT: { x: left + this._width, y: top },
      pointLB: { x: left, y: top + this._height },
    };
    return { top, left, coordPoints };
  };

  getElem = () => {
    return this._elem;
  };

  _setSizeBarrier() {
    this._elem.style.width = this._width + 'px';
    this._elem.style.height = this._height + 'px';
  }

  _removeStyle() {
    this._elem.removeAttribute('style');
  }

  _handleAddMove() {
    this._elem.classList.add(this._barrierSelectors.barrierMove);
  }

  _handleRemoveMove() {
    this._elem.classList.remove(this._barrierSelectors.barrierMove);
  }

  _getTemplate() {
    const barrierElement = document
      .querySelector(this._barrierSelectors.barrierTemplate)
      .content.querySelector(this._barrierSelectors.barrier)
      .cloneNode(true);

    return barrierElement;
  }
}
