import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    status: false,
    switchButton: 'OFF',
  };

  handleClick() {
    this.setState({
      status: !this.state.status,
      switchButton: !this.state.status ? 'ON' : 'OFF',
    });
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.switchButton}
      </button>
    );
  }
}
export default Toggler;
