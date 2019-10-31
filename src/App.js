import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    console.log(process.env.CLIENT_SECRET);
    const response = await axios.get(
      'https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}'
    );
    this.setState({ users: response.data });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
