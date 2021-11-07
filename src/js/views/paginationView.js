import View from './view.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (currentPage === 1 && numPages > 1) return this._generateMarkupBtn(1);
    if (currentPage === numPages && numPages > 1)
      return this._generateMarkupBtn(2);
    if (currentPage < numPages) return this._generateMarkupBtn(3);
    return '';
  }
  _generateMarkupBtn(numPage) {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const prevBtn = `<button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>`;
    const nextBtn = `
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`;
    const bothBtn = nextBtn + prevBtn;
    if (numPage === 1) {
      return nextBtn;
    }
    if (numPage === 2) {
      return prevBtn;
    }

    if (numPage === 3) {
      return bothBtn;
    }
  }
}

export default new PaginationView();
