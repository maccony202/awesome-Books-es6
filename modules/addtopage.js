import emptyMessage from './emptymsg.js';
import Collection from './collection.js';

export const collection = new Collection();

export const addToPage = (bookObject) => {
  const bookList = document.getElementById('book-list');
  const singlebook = document.createElement('tr');
  singlebook.classList.add('single-book');
  singlebook.setAttribute('id', bookObject.bookId);
  singlebook.innerHTML = `<td>${bookObject.title}</td><td>${bookObject.author}</td>`;
  const btnCell = document.createElement('td');
  btnCell.classList.add('btn-cell');

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', () => {
    collection.deleBook(bookObject.bookId);
    emptyMessage();
  });

  singlebook.appendChild(btnCell);
  btnCell.appendChild(deleteBtn);
  bookList.appendChild(singlebook);
};