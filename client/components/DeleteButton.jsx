import React from 'react';

const DeleteButton = ({
  flag,
  handleClick
}) => {

  return (
    <div>
      <button className='deleteButton' value={flag} onClick={handleClick}>DELETE {flag}</button>
    </div>
  );
}

export default DeleteButton;