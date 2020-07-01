import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../categories';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeFilter({ target }) {
    const { changeFilter } = this.props;
    changeFilter(target.value);
    this.setState({ filter: target.value });
  }

  render() {
    const mergedFilters = ['All', ...CATEGORIES];
    const { filter } = this.state;
    return (
      <div>
        Filter:
        <select onChange={this.handleChangeFilter} value={filter} name="filter">
          {mergedFilters.map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
