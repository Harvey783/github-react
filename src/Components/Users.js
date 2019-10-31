import React from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
  return (
    <div style={userStyle} className="">
      {users.map(user => (
        <UserItem key={user.id} className="" user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
