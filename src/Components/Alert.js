import React from 'react';

export const Alert = alert => {
  return (
    alert !== null && (
      <div>
        <i className="fas fa-info-cicrle">{alert.message}</i>
      </div>
    )
  );
};
