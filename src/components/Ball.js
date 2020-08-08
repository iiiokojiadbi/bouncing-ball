export default class Ball {
  constructor(ballSelectors, width, height) {
    this._ballSelectors = ballSelectors;
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
    const coordPoints = this._getPoints(12);
    return { top, left, coordPoints };
  };

  _getPoints(numberPoints) {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const midWidth = Math.floor(this._width / 2);
    const midHeight = Math.floor(this._height / 2);
    let degree = 360;
    const sectionDegree = degree / numberPoints;
    let points = [];

    for (let i = 0; i < numberPoints; i++) {
      const point = {
        x: left + midWidth + Math.floor(midWidth * Math.cos(degree)),
        y: top + midHeight + Math.floor(midHeight * Math.sin(degree)),
      };
      degree = degree - sectionDegree;
      points = [point, ...points];
    }
    return points;
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
    this._elem.classList.add(this._ballSelectors.ballJump);
  }

  _handleRemoveAnimation() {
    this._elem.classList.remove(this._ballSelectors.ballJump);
  }
}
