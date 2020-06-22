const addBook = book => ({ type: 'ADD_BOOK', book, });

const deleteBook = book => ({ type: 'DELETE_BOOK', book, });

export { addBook, deleteBook };
