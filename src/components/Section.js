import { barrierSelectors } from './../utils/constants';

// компонент отвечающий за рендер и добавление в разметку барьеров

export default class Section {
  constructor({ items, rendered, setItem }, containerSelector) {
    this._renderedItems = items;
    this._rendered = rendered;
    this._setItem = setItem;
    this._container = document.querySelector(containerSelector);
  }

  //метод для отрисовки компонента
  renderItems = () => {
    const item = this._renderedItems.pop();
    this._rendered(item);
    this._setItem(item);
    this._intervalRender = setInterval(() => {
      const item = this._renderedItems.pop();
      this._container
        .querySelector(`.${barrierSelectors.barrierMove}`)
        .remove();
      this._rendered(item);
      this._setItem(item);
    }, 3000);
  };

  //метод для отчистки элементов и удаления интервала
  resetItems = () => {
    clearInterval(this._intervalRender);
    this._renderedItems = null;
    this._container
      .querySelectorAll(`.${barrierSelectors.barrierMove}`)
      .forEach((elem) => {
        elem.remove();
      });
  };

  //метод для установки необходимых элементов
  setItems = (items) => {
    this._renderedItems = items;
  };

  //метод для добавления элемента в разметку
  addItem = (element) => {
    this._container.prepend(element);
  };
}
