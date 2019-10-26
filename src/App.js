import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
