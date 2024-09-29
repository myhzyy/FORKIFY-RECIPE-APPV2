import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      const goToPage = btn.dataset.goto;
      console.log(goToPage);

      handler();
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    console.log(curPage);

    /// curPage is equal to whatever we pass in

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    console.log(numPages);

    /// the numbers of results we get, divided by 10
    /// which is how many results we want on the page
    /// for example, if we get 59 results, and divied that by 10
    /// this will give us 6 pages once rounded up

    // Page 1, and there are other pages

    if (curPage === 1 && numPages > 1) {
      return `
      
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    /// if the curPage is = 1, and the amount of number of pages is greater than 1
    /// then return curPage +1, which shows page 2

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `

      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${curPage - 1}</span>
    </button>
      `;
    }

    /// if the current page is 6, and that is equal to 6 pages
    /// and the number of pages is greater than one
    /// this this will be the last page

    // Other page
    if (curPage < numPages) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${curPage - 1}</span>
    </button> 

      
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>
      
      
      `;
    }
    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
