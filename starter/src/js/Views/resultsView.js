import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again!`;
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        </div>
    </a>
  </li>`;
  }
}

export default new ResultsView();

/// resultsView . render

/// we take the results View, and run the method of render on it
/// the render method stores this.data, calls this generateMarkup
/// whilst saving it to const markup
/// runs clear on the preview markup
/// and appends the HTML of the generateMarkup

/// this means that the generateMark up from the resultsView gets put on the apge

/// we get the data from whatever we pass in when we call it
