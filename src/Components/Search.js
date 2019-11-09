import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <form className="">
          <input type="text" name="text" placeholder="Search for Users" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
