// @flow

import React from 'react';
import './SearchInput.css';

class SearchInput extends React.PureComponent {
  render() {
    const {onSearch, onChange, ...otherProps} = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          {...otherProps}
          onChange={this.onChange}
          type="text"
          className="SearchInput"
          placeholder="Etsi Night Cityn kuumimpia uutisia"/>
      </form>
    );
  }

  onChange = event => {
    this.props.onChange(event.target.value);
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.props.value);
  }
}

export default SearchInput;
