export default class Section {
  constructor({ items, rendered }, containerSelector) {
    this._renderedItems = items;
    console.log(items);
    this._rendered = rendered;
    this._container = document.querySelector(containerSelector);
    console.log(this._container);
  }

  renderItems = () => {
    this._renderedItems.forEach((item) => {
      console.log(item);
      this._rendered(item);
    });
  };

  addItem = (element) => {
    this._container.prepend(element);
  };
}
