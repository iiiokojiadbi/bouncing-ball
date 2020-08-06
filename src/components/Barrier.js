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
    this._handleRemoveMove();
  };

  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    return { top, left };
  };

  _handleAddMove() {
    this._elem.classList.add('barrier_is_move');
  }

  _handleRemoveMove() {
    this._elem.classList.remove('barrier_is_move');
  }
}
