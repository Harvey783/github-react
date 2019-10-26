import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 'id',
        login: 'Harvey783',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/25391865?s=40&v=4',
        html_url: 'https://github.com/Harvey783'
      },
      {
        id: 'id',
        login: 'Tyler',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/25391865?s=40&v=4',
        html_url: 'https://github.com/Harvey783'
      },
      {
        id: 'id',
        login: 'Jen',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/25391865?s=40&v=4',
        html_url: 'https://github.com/Harvey783'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle} className="">
        {this.state.users.map(user => (
          <UserItem key={user.id} className="" user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
