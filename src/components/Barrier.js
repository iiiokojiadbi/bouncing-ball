// компонент отвечающий за функционирование барьера

export default class Barrier {
  constructor(barrierSelectors) {
    this._barrierSelectors = barrierSelectors;
    this._elem = this._getTemplate();
    this._width = this._getRandomSize();
    this._height = this._getRandomSize();
    this._isMove = false;
  }

  //метод для установки состояния движения барьера
  handleMove = () => {
    this._isMove = true;
    this._setSizeBarrier();
    this._handleAddAnimation();
  };

  //метод для сброса состояния барьера
  handleStopMove = () => {
    this._isMove = false;
    this._removeStyle();
    this._handleRemoveAnimation();
  };

  //метод для фиксации позиции барьера при столкновении
  setPosition = ({ top, left }) => {
    this._handleRemoveAnimation();
    this._elem.style.top = top + 'px';
    this._elem.style.left = left + 'px';
  };

  //метод для получения текущей позиции барьера
  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const coordPoints = {
      pointLT: { x: left, y: top },
      pointRT: { x: left + this._width, y: top },
      pointLB: { x: left, y: top + this._height },
    };
    return { top, left, coordPoints };
  };

  //метод для получения элемента
  getElem = () => {
    return this._elem;
  };

  //внутренний метод для получения случайного размера барьера
  _getRandomSize() {
    return Math.floor(Math.random() * 90 + 40);
  }

  //внутренний метод для добавления инлайн стиля для установки размера барьера
  _setSizeBarrier() {
    this._elem.style.width = this._width + 'px';
    this._elem.style.height = this._height + 'px';
  }

  //внутренний метод удаления инлайн стиля
  _removeStyle() {
    this._elem.removeAttribute('style');
  }

  //внутренний метод для добавления класса с анимацией
  _handleAddAnimation() {
    this._elem.classList.add(this._barrierSelectors.barrierMove);
  }

  //внутренний метод для удаления класса с анимацией
  _handleRemoveAnimation() {
    this._elem.classList.remove(this._barrierSelectors.barrierMove);
  }

  //внутренний метод для получения html шаблона барьера из разметки
  _getTemplate() {
    const barrierElement = document
      .querySelector(this._barrierSelectors.barrierTemplate)
      .content.querySelector(this._barrierSelectors.barrier)
      .cloneNode(true);

    return barrierElement;
  }
}
