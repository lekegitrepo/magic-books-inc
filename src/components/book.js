import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';
import '../styles/circle.css';

const Book = ({ book: { id, title, category }, removeBook, editBook=f=>f }) => (
  <div className="book content">
    <div className="book-detail">
      <div className="book-info font-r-slab">
        <h6 className="category font-monts">{ category }</h6>
        <h3 className="title">{ title }</h3>
        <span className="author font-w-300">author</span>
      </div>
      <div className="btn-book font-r-slab font-w-300">
        <span className="btn btn-del" onClick={removeBook}>Delete</span>
        <button className="btn btn-edit" onClick={editBook}>Edit</button>
      </div>
    </div>
    <div className="reading-status">
      <div className="c100 p65">
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
      <div className="book-status font-monts">
        <h3 className="percent font-w-n">9%</h3>
        <span className="completed font-w-n">Completed</span>
      </div>
    </div>
    <div className="book-progress font-r-slab">
      <h6 className="current-chapter font-w-300">CURRENT CHAPTER</h6>
      <h4 className="chapter font-w-300"> Chapter 19</h4>
      <button className="btn btn-update font-w-b btn-blue">UPDATE PROGRESS</button>
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
