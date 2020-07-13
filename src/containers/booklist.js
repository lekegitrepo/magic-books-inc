/* eslint-disable array-callback-return */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';
import image from '../images/avatar.png';

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
      <div className="book-store font-w-b">
        <div className="header">
          <div className="book-header">
            <h1 className="main-title font-monts">Bookstore CMS</h1>
            <button type="submit" className="btn-books btn-white">BOOKS</button>
            <CategoryFilter changeFilter={this.handleFilterChange} />
          </div>
          <div className="user-img">
            <img src={image} alt="user avatar" />
          </div>
        </div>
        <div className="book-container">
          <div className="book-list">
            { booksFilter.map(book => (
              <Book key={book.id} book={book} removeBook={() => this.handleRemoveBook(book)} />
            ))}
          </div>
        </div>
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
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
