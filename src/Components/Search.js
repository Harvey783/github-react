import React from 'react';

class Search extends React.Component {
  state = {
    text: ''
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter a user');
    } else {
      // Pass to App.js
      this.props.searchUsers(this.state.text);
      // Clear search
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="">
          <input
            type="text"
            name="text"
            placeholder="Search for Users"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" />
        </form>
        {this.props.showClear && (
          <button className="" onClick={this.props.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
