import { ball } from './../utils/constants';

export default class Ball {
  ballEl = ball;
  isJump = false;

  handleJump = () => {
    if (!this.isJump) {
      this.isJump = true;
      this._handleAddJump();
      this.setJumpInterval = setTimeout(() => {
        this.isJump = false;
        this._handleRemoveJump();
        clearInterval(this.setJumpInterval);
      }, 1500);
    }
  };

  handleResetStatus = () => {
    this.isJump = false;
    this._handleRemoveJump();
  };

  _handleAddJump() {
    this.ballEl.classList.add('ball_is_jump');
  }

  _handleRemoveJump() {
    this.ballEl.classList.remove('ball_is_jump');
  }
}
