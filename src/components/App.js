import React from 'react';
import '../styles/App.css';
import BooksList from '../containers/booklist';
import BooksForm from '../containers/bookform';

function App() {
  return (
    <div className="App">
      <h4> This is magic books app </h4>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
