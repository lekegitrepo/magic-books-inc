import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CATEGORIES from '../categories';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = { ...this.state, id: v4() };
    const { createBook } = this.props;
    createBook(book);
    this.setState({ title: '', category: '' });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-container">
        <h3 className="form-title">Add New Book</h3>
        <form onSubmit={this.handleSubmit}>
          <input className="form-input" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Name of the book" />
          <select className="form-category" name="category" onChange={this.handleChange} value={category}>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button className="btn-add" type="submit">Add a Book</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);
