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

  setPosition = ({ top, left }) => {
    this._handleRemoveJump();
    this._elem.style.top = top + 'px';
    this._elem.style.left = left + 'px';
  };

  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    return { top, left };
  };

  handleResetStatus = () => {
    this._isJump = false;
    this._removeStyle();
    this._handleRemoveJump();
  };

  _removeStyle() {
    this._elem.removeAttribute('style');
  }

  _handleAddJump() {
    this._elem.classList.add('ball_is_jump');
  }

  _handleRemoveJump() {
    this._elem.classList.remove('ball_is_jump');
  }
}
