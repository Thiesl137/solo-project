import React from 'react';


const MessageBoard = ({
  message
}) => {

  return (
    <div>
      <button className='messageBoard' >{message}</button>
    </div>
  );
}


export default MessageBoard;