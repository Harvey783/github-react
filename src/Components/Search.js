import React from 'react';

class Search extends React.Component {
  state = {
    text: ''
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form className="">
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
