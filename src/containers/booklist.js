/* eslint-disable array-callback-return */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { removeBook } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { books } = this.props;
    return (
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
            <Book key={book.id} book={book} removeBook={() => this.handleDelete(book)} />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
