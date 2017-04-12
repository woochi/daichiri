import React from 'react';
import {withRouter} from 'react-router';
import SearchInput from './SearchInput';
import './Search.css';
import {withState} from 'recompose';

class Search extends React.PureComponent {
  render() {
    return (
      <div className="Search">
        <div className="Search-content">
          <SearchInput
            autoFocus
            onSearch={this.onSearch}
            onChange={this.props.onChangeSearchValue}
            value={this.props.searchValue}/>
        </div>
      </div>
    );
  }

  onSearch = (value) => {
    this.props.history.push(`/search/${value.trim()}`);
  }
}

export default withState('searchValue', 'onChangeSearchValue', '')(withRouter(Search));
