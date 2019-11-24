import React, { useState } from 'react';

const Search = props => {
  const [text, setText] = useState('');

  const onChange = event => setText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (text === '') {
      props.setAlert('Please enter a user');
    } else {
      props.searchUsers(text);

      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="">
        <input
          type="text"
          name="text"
          placeholder="Search for Users"
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" />
      </form>
      {props.showClear && (
        <button className="" onClick={props.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
