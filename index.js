
import Books from "./modules/uI.js";
import Date from "./modules/date.js";
import * as module from './modules/selectors.js';

window.addEventListener('load', Date());

module.newBook.addEventListener('click', module.bookCall);
window.addEventListener('load', module.onload);
module.bookLists.addEventListener('click', module.onload);
document.addEventListener('DOMContentLoaded', Books.displayBooks);
const Form = document.querySelector('#form');
Form.addEventListener('submit', (e) => {
   e.preventDefault();
 
   const title = document.querySelector('#title').value;
   const author = document.querySelector('#author').value;
 
   const book = new Books(title, author);
 
   Books.addBookToList(book);
 
   Books.addBooks(book);
 
   Books.clearField();
 });

 document.querySelector('#book-container').addEventListener('click', (e) => {
   Books.removeBooks(e.target.parentElement.previousElementSibling.innerHTML);
   Books.deleteBook(e.target);
 });