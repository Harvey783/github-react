import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Search from './Components/Search';
import Alert from './Components/Alert';
import About from './Components/About';
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
    setTimeout(() => this.setState({ alert: null }), 1500);
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={this.state.users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
