export default class Barrier {
  constructor(barrierSelector, width, height) {
    this._elem = document.querySelector(barrierSelector);
    this._width = width;
    this._height = height;
    this._isMove = false;
  }

  handleMove = () => {
    this._isMove = true;
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
      pointLB: { x: left, y: top - this._height },
      pointRB: { x: left + this._width, y: top - this._height },
    };
    return { top, left, coordPoints };
  };

  _removeStyle() {
    this._elem.removeAttribute('style');
  }

  _handleAddMove() {
    this._elem.classList.add('barrier_is_move');
  }

  _handleRemoveMove() {
    this._elem.classList.remove('barrier_is_move');
  }
}
