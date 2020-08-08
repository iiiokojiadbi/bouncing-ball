//компонент отвечающий за функционирование мяча

export default class Ball {
  constructor(ballSelectors, width, height) {
    this._ballSelectors = ballSelectors;
    this._elem = document.querySelector(ballSelectors.ball);
    this._width = width;
    this._height = height;
    this._isJump = false;
  }

  //метод для вызова состояния прыжка мяча
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

  //метод для фиксации позиции мяча при столкновении
  setPosition = ({ top, left }) => {
    this._handleRemoveAnimation();
    this._elem.style.top = top + 'px';
    this._elem.style.left = left + 'px';
  };

  //метод для получения текущей позиции мяча
  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const coordPoints = this._getPoints(12);
    return { top, left, coordPoints };
  };

  //метод ресета состояния мяча
  handleResetStatus = () => {
    this._isJump = false;
    this._removeStyle();
    this._handleRemoveAnimation();
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

  //внутренний метод удаления инлайн стиля
  _removeStyle() {
    this._elem.removeAttribute('style');
  }

  //внутренний метод для добавления класса с анимацией
  _handleAddAnimation() {
    this._elem.classList.add(this._ballSelectors.ballJump);
  }

  //внутренний метод для удаления класса с анимацией
  _handleRemoveAnimation() {
    this._elem.classList.remove(this._ballSelectors.ballJump);
  }
}
