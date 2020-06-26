import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, removeBook }) => (
  <tr>
    <td>{ id }</td>
    <td>{ title }</td>
    <td>{ category }</td>
    <td><button type="submit" onClick={removeBook}>Delete</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
