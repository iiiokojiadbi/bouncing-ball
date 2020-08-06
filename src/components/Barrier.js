export default class Barrier {
  constructor(barrierClass) {
    this._barrierEl = document.querySelector(barrierClass);
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

  _handleAddMove() {
    this._barrierEl.classList.add('barrier_is_move');
  }

  _handleRemoveMove() {
    this._barrierEl.classList.remove('barrier_is_move');
  }
}
