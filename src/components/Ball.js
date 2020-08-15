import Item from './Item';

//компонент отвечающий за функционирование мяча

export default class Ball extends Item {
  constructor(selectors, width, height) {
    super(selectors);
    this._width = width;
    this._height = height;
  }

  //метод для вызова состояния прыжка мяча
  handleJump = () => {
    if (!this._isAnim) {
      this._isAnim = true;
      this._handleAddAnimation();
      this._setJumpTimeout = setTimeout(() => {
        this._isAnim = false;
        this._handleRemoveAnimation();
        clearTimeout(this._setJumpTimeout);
      }, 1500);
    }
  };

  //метод для получения текущей позиции мяча
  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const coordPoints = this._getPoints(12);
    return { top, left, coordPoints };
  };

  //внутренний метод получения точек на окружности мяча
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
}
