import showSection from "./modules/menu.js";
import Date from "./modules/date.js";
import buildPage from "./modules/buildpage.js";
import emptyMessage from "./modules/emptymsg.js";
import addSingle from "./modules/addSingle.js";

window.addEventListener('load', Date());

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  addSingle();
  emptyMessage();
})

const itemsList = document.getElementById('menu-items-lists');
const itemsForm = document.getElementById('menu-items-form');
const itemsContact = document.getElementById('menu-items-contact');
const addBookLink = document.getElementById('add-books-link');

itemsList.addEventListener('click', () => {
  showSection('lists');
});

itemsForm.addEventListener('click', () => {
  showSection('form');
});

addBookLink.addEventListener('click', () => {
  showSection('form');
});

itemsContact.addEventListener('click', () => {
   showSection('contact');
});

window.onload = () => {
  buildPage();
  emptyMessage();
}