import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div>
        <i className="fas fa-info-cicrle"></i>
        {alert.message}
      </div>
    )
  );
};

export default Alert;
