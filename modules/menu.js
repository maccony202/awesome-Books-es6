const showSection = (section) => {
  const sectionBookList = document.getElementById('lists');
  const sectionBookForm = document.getElementById('add-books');
  const sectionContact = document.getElementById('contact');
  const sucessMessage = document.getElementById('sucess');

  switch (section) {
    case 'lists':
      if (sectionBookList.classList.contains('d-none')) {
        sectionBookList.classList.remove('d-none');
        sectionBookForm.classList.add('d-none');
        sectionContact.classList.add('d-none');
      }
      break;

    case 'form':
      if (sectionBookForm.classList.contains('d-none')) {
        sectionBookForm.classList.remove('d-none');
        sectionBookList.classList.add('d-none');
        sectionContact.classList.add('d-none');
        sucessMessage.classList.add('d-none');
      }
      break;

    case 'contact':
      if (sectionContact.classList.contains('d-none')) {
        sectionContact.classList.remove('d-none');
        sectionBookForm.classList.add('d-none');
        sectionBookList.classList.add('d-none');
      }
      break;

    default: break;
  }
};

export default showSection;