export default class Collection {
  constructor() {
    this.bookData = [];
  }

    addBook = (singlebook) => {
      this.bookData.push(singlebook);
      localStorage.setItem('library', JSON.stringify(this.bookData));
    }

    deleBook = (bookId) => {
      const bookElement = document.getElementById(bookId);
      bookElement.remove();
      this.bookData = this.bookData.filter((bookObject) => bookObject.bookId !== bookId);
      localStorage.setItem('library', JSON.stringify(this.bookData));
    }
}