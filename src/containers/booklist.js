/* eslint-disable array-callback-return */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { books, filter } = this.props;
    let booksFilter;
    if (filter === 'All') {
      booksFilter = books;
    } else {
      booksFilter = books.filter(book => book.category === filter);
    }

    return (
      <div>
        <CategoryFilter changeFilter={this.handleFilterChange} />
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            { booksFilter.map(book => (
              <Book key={book.id} book={book} removeBook={() => this.handleRemoveBook(book)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  //changeFilter: PropTypes.func.isRequired,
  //filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
