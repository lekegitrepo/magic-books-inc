import React from 'react';
import { v4 } from 'uuid';
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

  handleChange({ target: { name, value} }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = { ...this.state, id: v4()};
    createBook(book);
    this.setState({ title: '', category: ''});
  }

  render() {
    const CATEGORIES = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Name of the book" />
        <select name="category" onChange={this.handleChange} value={category}>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Add a Book</button>
      </form>
    );
  }
}

export default BooksForm;
