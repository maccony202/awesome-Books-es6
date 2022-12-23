import BookInfo from "./bookinfo.js";

const readInput = () => {
    const title = document.getElementById('book-title');
    const author = document.getElementById('book-author');
    const errorMsg = document.getElementById('error');
    const sucessMsg = document.getElementById('sucess');

    if(title.value === '' && author.value === ''){
        errorMsg.innerHTML = '* All fields are required';
        return false;
    }

    if(title.value === '') {
        errorMsg.innerHTML = 'Empty title';
        return false;
    }

    if(author.value === ''){
        errorMsg.innerHTML = 'Empty author';
    }

    const singleBookInput = new BookInfo(title.value, author.value);
    errorMsg.innerHTML = '';
    sucessMsg.innerHTML = 'You added a book see in the list';

    title.value = '';
    author.value = '';
    return singleBookInput;

};

export default readInput;