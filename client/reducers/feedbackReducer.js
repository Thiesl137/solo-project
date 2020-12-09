import * as types from '../constants/actionTypes';
import * as states from './state';

const feedbackReducer = (state=states.feedbackState, action) => {
  //scoped variables
  let messageBoard;
    
  switch(action.type) {

    case types.UPDATE_MESSAGE_BOARD:
      
      messageBoard = (action.payload.deletedCount) ? action.payload.messageBoard : "No transactions available"
      
    default:
      return {
        ...state,
        messageBoard
      };
  };
}

export default feedbackReducer;