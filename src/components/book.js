import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, remove }) => (
  <tr>
    <td>{ id }</td>
    <td>{ title }</td>
    <td>{ category }</td>
    <td><button>Delete</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
