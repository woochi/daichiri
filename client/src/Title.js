// @flow

import React from 'react';
import './Title.css';

class Title extends React.PureComponent {
  render() {
    return (
      <div className="Title">{this.props.children}</div>
    );
  }
}

export default Title;

