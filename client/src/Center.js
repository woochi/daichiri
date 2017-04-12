// @flow

import React from 'react';
import './Center.css';

class Center extends React.PureComponent {
  render() {
    return (
      <div className="Center">
        <div className="Center-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Center;
