import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: false,
    };
  }
  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };
  render() {
    return (
      <button className="toggler" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggler;
