import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, removeBook, editBook=f=>f }) => (
  <div>
    <h6>{ category }</h6>
    <h3>{ title }</h3>
    <span>author</span>
    <div>
      <button type="submit" onClick={removeBook}>Delete</button>
      <button type="submit" onClick={editBook}>Edit</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
  editBook: PropTypes.func,
};

export default Book;
