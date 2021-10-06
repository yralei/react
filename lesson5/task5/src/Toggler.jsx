import React, { Component } from 'react';

// class Toggler extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isToggleOn: false,
//     };
//   }
//   handleClick = () => {
//     this.setState({
//       isToggleOn: !this.state.isToggleOn,
//     });
//   };
//   render() {
//     return (
//       <button className="toggler" onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// export default Toggler;

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
