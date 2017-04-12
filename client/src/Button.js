// @flow

import React from 'react';
import './Button.css';

class Button extends React.PureComponent {
  render() {
    return (
      <button {...this.props} className="Button" autoFocus>{this.props.children}</button>
    );
  }
}

export default Button;
