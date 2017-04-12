// @flow

import React from 'react';
import './Paragraph.css';

class Paragraph extends React.PureComponent {
  render() {
    return (
      <div className="Paragraph">{this.props.children}</div>
    );
  }
}

export default Paragraph;
