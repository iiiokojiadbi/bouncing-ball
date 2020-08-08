// компонент отвечающий за показ ошибки

export default class ShowFail {
  constructor(showSelector) {
    this._showEl = document.querySelector(showSelector);
  }

  showFail = () => {
    this._showEl.classList.add('game__show_active');
  };

  hideFail = () => {
    this._showEl.classList.remove('game__show_active');
  };
}
