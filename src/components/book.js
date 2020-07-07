import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

const Book = ({ book: { id, title, category }, removeBook, editBook=f=>f }) => (
  <div className="book">
    <div>
      <div>
        <h6>{ category }</h6>
        <h3>{ title }</h3>
        <span>author</span>
      </div>
      <div>
        <button type="submit" onClick={removeBook}>Delete</button>
        <button type="submit" onClick={editBook}>Edit</button>
      </div>
    </div>
    <div>
      <div>
        <img src="" />
        <h3>9%</h3>
        <span>Completed</span>
      </div>
    </div>
    <div>
      <h6>CURRENT CHAPTER</h6>
      <h4> Chapter 19</h4>
      <button>UPDATE PROGRESS</button>
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
