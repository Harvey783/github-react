import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios
      .get('https://api.github.com/users')
      .then(response => console.log(response.data));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
