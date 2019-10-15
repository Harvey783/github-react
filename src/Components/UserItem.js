import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'Harvey783',
      avatar_url: 'https://avatars1.githubusercontent.com/u/25391865?s=40&v=4',
      html_url: 'https://github.com/Harvey783'
    };
  }
  render() {
    return (
      <div className="card text-center">
        <img src={this.state.avatar_url} alt="" style={{ width: '60px' }} />
        <h4>{this.state.login}</h4>
      </div>
    );
  }
}

export default UserItem;
