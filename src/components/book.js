import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

const Book = ({ book: { id, title, category }, removeBook, editBook=f=>f }) => (
  <div className="book">
    <div className="book-detail">
      <div className="book-info">
        <h6 className="category">{ category }</h6>
        <h3 className="title">{ title }</h3>
        <span className="author">author</span>
      </div>
      <div className="btn-book">
        <span className="btn btn-del" onClick={removeBook}>Delete</span>
        <button className="btn btn-edit" onClick={editBook}>Edit</button>
      </div>
    </div>
    <div className="reading-status">
      <div className="c100 p25">
        <span>25%</span>
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
      <h3 className="percent">9%</h3>
      <span className="completed">Completed</span>
    </div>
    <div className="book-progress">
      <h6 className="current-chapter">CURRENT CHAPTER</h6>
      <h4 className="chapter"> Chapter 19</h4>
      <button className="btn btn-update">UPDATE PROGRESS</button>
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
