import React from 'react';

class Search extends React.Component {
  state = {
    text: ''
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.text);
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
      </div>
    );
  }
}

export default Search;
