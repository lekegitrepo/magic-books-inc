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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({ title: target.value });
  };

  handleSelect = ({ target }) => {
    this.setState({ category: target.value });
  };

  handleSubmit = () => 'full implementation in the next milestone';

  render() {
    const CATEGORIES = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} onChange={this.handleChange} />
        <select name="category" onChange={this.handleSelect} value={category}>
          {CATEGORIES.map((cat, i) => (
            <option key={i} value={cat}>
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
