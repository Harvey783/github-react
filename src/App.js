import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Search from './Components/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    alert: null
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: response.data });
  }

  searchUsers = async text => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: response.data.items });
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  setAlert = message => {
    this.setState({ alert: { message } });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
