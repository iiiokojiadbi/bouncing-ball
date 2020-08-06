export default class Ball {
  constructor(ballClass) {
    this._elem = document.querySelector(ballClass);
    this._isJump = false;
  }

  handleJump = () => {
    if (!this._isJump) {
      this._isJump = true;
      this._handleAddJump();
      this._setJumpTimeout = setTimeout(() => {
        this._isJump = false;
        this._handleRemoveJump();
        clearTimeout(this._setJumpTimeout);
      }, 1500);
    }
  };

  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    return { top, left };
  };

  handleResetStatus = () => {
    this._isJump = false;
    this._handleRemoveJump();
  };

  _handleAddJump() {
    this._elem.classList.add('ball_is_jump');
  }

  _handleRemoveJump() {
    this._elem.classList.remove('ball_is_jump');
  }
}
