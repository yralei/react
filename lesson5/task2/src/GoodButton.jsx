import React, { Component } from 'react';
class GoodButton extends Component {
  handleClick(e) {
    alert(e.target.textContext);
  }
  render() {
    <button className="fancy-button" onClick={this.handleClick}>
      Click me!
    </button>;
  }
}

export default GoodButton;
