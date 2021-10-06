import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      isToogleOn: false,
    };
  }
  toggler = () => {
    this.setState({
      isToogleOn: !this.state.isToogleOn,
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggler}>
        {this.state.isToogleOn ? 'On' : 'Off'}
      </button>
    );
  }
}

export default Toggler;
