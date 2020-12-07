import * as types from '../constants/actionTypes';
import * as states from './state';

const feedbackReducer = (state=states.feedbackState, action) => {
  //scoped variables

  console.log('state in feedback reducer is: ', state)

  switch(action.type) {

    case types.UPDATE_MESSAGE_BOARD:
      
    default:
      return state;
  };
}

export default feedbackReducer;