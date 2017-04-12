// @flow

import React from 'react';
import {withRouter} from 'react-router';

class AppBar extends React.PureComponent {
  render() {
    return (
      <div className="AppBar">
        <a onClick={this.props.history.goBack}>Takaisin</a>
      </div>
    );
  }
}

export default withRouter(AppBar);
