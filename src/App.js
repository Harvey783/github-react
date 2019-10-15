import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import UserItem from './Components/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
