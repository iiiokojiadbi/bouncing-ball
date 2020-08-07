export default class Section {
  constructor({ items, rendered, setItem }, containerSelector) {
    this._renderedItems = items;
    this._rendered = rendered;
    this._setItem = setItem;
    this._container = document.querySelector(containerSelector);
  }

  renderItems = () => {
    const item = this._renderedItems.pop();
    this._rendered(item);
    this._setItem(item);
    this._intervalRender = setInterval(() => {
      const item = this._renderedItems.pop();
      this._container.querySelector('.barrier_is_move').remove();
      this._rendered(item);
      this._setItem(item);
    }, 3000);
  };

  resetItems = () => {
    clearInterval(this._intervalRender);
    this._renderedItems = null;
    this._container.querySelectorAll('.barrier_is_move').forEach((elem) => {
      elem.remove();
    });
  };

  setItems = (items) => {
    this._renderedItems = items;
  };

  addItem = (element) => {
    this._container.prepend(element);
  };
}
