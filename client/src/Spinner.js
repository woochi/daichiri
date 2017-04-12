// @flow

import React from 'react';
import MDSpinner from 'react-md-spinner';

class Spinner extends React.PureComponent {
  render() {
    return (
      <MDSpinner singleColor="rgb(62, 166, 146)" size={60} {...this.props}/>
    );
  }
}

export default Spinner;

