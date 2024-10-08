import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    this._data = data;
    console.log(this._data);
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const newMmarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMmarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));

    const curElement = Array.from(this._parentElement.querySelectorAll('*'));
    console.log(curElement);
    console.log(newElements);

    newElements.forEach((newEl, i) => {
      const curEl = curElement[i];

      // console.log(curEl, newEl.isEqualNode(curEl));

      //// Updates changed TEXT

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      //// Updates changed ATTRIBUTES

      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });

    /// newDOM will become an object
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
      <div>
      <svg>
      <use href="${icons}#icon-alert-triangle"></use>
      </svg>
      </div>
      <p>${message}</p>
      </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
        <div class="message">
        <div>
        <svg>
        <use href="${icons}#icon-smile"></use>
        </svg>
        </div>
        <p>N${message}</p>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

/// the View is the parent class, it has all the methods that are going to be shared
/// amongst the Views

///

console.log(View);
