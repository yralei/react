import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  render() {
    return (
      <div className="colors">
        <button onClick={this.handleClick} className="toggler">
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Toggler;

// class Toggler extends Component {
//   constructor(props) {
//     super(props);
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
//       <button onClick={this.handleClick} className="toggler">
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// export default Toggler;
