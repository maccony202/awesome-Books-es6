export default class Books {
    constructor(title, author){
        this.title = title,
        this.author = author
    }

    static displayBooks() {
        const books = Books.getBooks();
        books.forEach((book) => Books.addBookToList(book));
      }

      static addBookToList(book) {
        const bList = document.querySelector('#book-container');
    
        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>"${book.title}" by ${book.author}</td>
          
          <td><button class= "delete">remove</button></td>
          `;
        bList.appendChild(row);
      }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
          el.parentElement.parentElement.remove();
        }
      }

      static clearField() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
      }

    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBooks(book){
        const books = Books.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBooks(author) {
        const books = books.getBooks();
        let index = 0;
        books.filter((book) => {
          if (book.author !== author) { index = +1; }
          return books;
        });
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
      }
}