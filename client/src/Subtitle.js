// @flow

import React from 'react';
import './Subtitle.css';

class Subtitle extends React.PureComponent {
  render() {
    return (
      <div className="Subtitle">{this.props.children}</div>
    );
  }
}

export default Subtitle;
