export default class Barrier {
  constructor(barrierClass) {
    this._elem = document.querySelector(barrierClass);
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
    return { top, left };
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
