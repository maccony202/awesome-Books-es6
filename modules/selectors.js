export const bookLists = document.querySelector('#booklist');
export const newBook = document.querySelector('#addbook');
export const listSection = document.querySelector('.lists');
export const addSection = document.querySelector('.add');

export const onload = () => {
    addSection.style.display = 'none';
    listSection.style.display = 'block';
    bookLists.classList.add('active');
    newBook.classList.remove('active');
};

export const bookCall = () => {
    listSection.style.display = 'none';
    addSection.style.display = 'flex';
    newBook.classList.add('active');
    bookLists.classList.remove('active');
}