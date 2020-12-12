import React from 'react';

const DeleteButton = ({
  buttonName,
  handleClick,
}) => {

  return (
    <div>
      <button className='deleteButton' value={buttonName} onClick={() => {handleClick()}}>DELETE {buttonName}</button>
    </div>
  );
}

export default DeleteButton;