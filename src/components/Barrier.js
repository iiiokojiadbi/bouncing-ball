import Item from './Item';

// компонент отвечающий за функционирование барьера

export default class Barrier extends Item {
  constructor(selectors) {
    super(selectors);
    this._elem = this._getTemplate();
    this._width = this._getRandomSize();
    this._height = this._getRandomSize();
    this._setSizeBarrier();
  }

  //метод для установки состояния движения барьера
  handleMove = () => {
    this._isAnim = true;
    this._handleAddAnimation();
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

  //внутренний метод для получения html шаблона барьера из разметки
  _getTemplate() {
    const barrierElement = document
      .querySelector(this._selectors.template)
      .content.querySelector(this._selectors.item)
      .cloneNode(true);

    return barrierElement;
  }
}
