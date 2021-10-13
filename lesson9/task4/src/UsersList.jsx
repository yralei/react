import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    filterText: '',
    count: this.props.users.length,
  };

  onChange = e => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const usersList = this.props.users.filter(user => user.name.includes(this.state.filterText));

    return (
      <div>
        <div className="filter">
          <Filter
            count={usersList.length}
            filterText={this.state.filterText}
            onChange={this.onChange}
          />
        </div>
        <div>
          <ul className="users">
            {usersList.map(user => (
              <User key={user.id} {...user} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UsersList;
