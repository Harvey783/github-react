import React, { Component } from 'react';

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
        login: 'Harvey783',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/25391865?s=40&v=4',
        html_url: 'https://github.com/Harvey783'
      },
      {
        id: 'id',
        login: 'Harvey783',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/25391865?s=40&v=4',
        html_url: 'https://github.com/Harvey783'
      }
    ]
  };

  render() {
    return (
      <div className="">
        {this.state.users.map(user => (
          <div key={user.id} className="">
            {user.login}
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
