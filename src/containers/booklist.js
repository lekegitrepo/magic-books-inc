/* eslint-disable array-callback-return */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>category</th>
      </tr>
    </thead>
    <tbody>
      { books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({ books: state.books });

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
