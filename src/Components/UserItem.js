import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        style={{ width: '70px', borderRadius: '75%' }}
      />
      <h4>
        <a href={html_url}>{login}</a>
      </h4>
    </div>
  );
};

export default UserItem;
