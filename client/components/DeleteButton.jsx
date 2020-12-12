import React from 'react';

const DeleteButton = ({
  buttonName,
  handleAllClick,
}) => {

  return (
    <div>
      <button className='deleteButton' value={buttonName} onClick={() => {handleAllClick()}}>DELETE {buttonName}</button>
    </div>
  );
}

export default DeleteButton;