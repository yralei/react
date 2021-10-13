import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  search = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
    //console.log(this.state.value);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="search__input"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
export default Search;
