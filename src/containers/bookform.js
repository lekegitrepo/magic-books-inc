import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange({ target }) {
    this.setState({ title: target.value });
  }

  handleSelect({ target }) {
    this.setState({ category: target.value });
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
      <form>
        <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Name of the book" />
        <select name="category" onChange={this.handleSelect} value={category}>
          {CATEGORIES.map((cat) => (
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
