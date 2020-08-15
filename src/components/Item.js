export default class Item {
  constructor(selectors) {
    this._selectors = selectors;
    this._elem = document.querySelector(selectors.item);
    this._isAnim = false;
  }

  //метод для фиксации позиции элемента при столкновении
  setPosition = ({ top, left }) => {
    this._handleRemoveAnimation();
    this._elem.style.top = top + 'px';
    this._elem.style.left = left + 'px';
  };

  //метод для получения текущей позиции элемента
  getPosition = () => {
    const { offsetTop: top, offsetLeft: left } = this._elem;
    const coordPoints = {
      pointLT: { x: left, y: top },
      pointRT: { x: left + this._width, y: top },
      pointLB: { x: left, y: top + this._height },
    };
    return { top, left, coordPoints };
  };

  //метод для сброса состояния 
  handleResetStatus = () => {
    this._isAnim = false;
    this._removeStyle();
    this._handleRemoveAnimation();
  };

  //метод для получения элемента
  getElem = () => {
    return this._elem;
  };

  //внутренний метод удаления инлайн стиля
  _removeStyle() {
    this._elem.removeAttribute('style');
  }

  //внутренний метод для добавления класса с анимацией
  _handleAddAnimation() {
    this._elem.classList.add(this._selectors.anim);
  }

  //внутренний метод для удаления класса с анимацией
  _handleRemoveAnimation() {
    this._elem.classList.remove(this._selectors.anim);
  }
}
