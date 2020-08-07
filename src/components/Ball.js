import { ballSelectors } from '../utils/constants';

export default class Ball {
  constructor(ballSelectors, width, height) {
    this._elem = document.querySelector(ballSelectors.ball);
    this._width = width;
    this._height = height;
    this._isJump = false;
  }

  handleJump = () => {
    if (!this._isJump) {
      this._isJump = true;
      this._handleAddAnimation();
      this._setJumpTimeout = setTimeout(() => {
        this._isJump = false;
        this._handleRemoveAnimation();
        clearTimeout(this._setJumpTimeout);
      }, 1500);
    }
  };

  setPosition = ({ top, left }) => {
    this._handleRemoveAnimation();
    this._elem.style.top = top + 'px';
    this._elem.style.left = left + 'px';
  };

  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const coordPoints = this._getPoints();
    return { top, left, coordPoints };
  };

  _getPoints() {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const midWidth = Math.floor(this._width / 2);
    const midHeight = Math.floor(this._height / 2);
    const coordPoints = [
      {
        x: left + midWidth,
        y: top,
      },
      {
        x: left + this._width,
        y: top + midHeight,
      },
      {
        x: left + midWidth,
        y: top + midHeight,
      },
      {
        x: left + midWidth,
        y: top + this._height,
      },
      {
        x: left,
        y: top + midHeight,
      },
    ];
    return coordPoints;
  }

  handleResetStatus = () => {
    this._isJump = false;
    this._removeStyle();
    this._handleRemoveAnimation();
  };

  _removeStyle() {
    this._elem.removeAttribute('style');
  }

  _handleAddAnimation() {
    this._elem.classList.add(ballSelectors.ballJump);
  }

  _handleRemoveAnimation() {
    this._elem.classList.remove(ballSelectors.ballJump);
  }
}
