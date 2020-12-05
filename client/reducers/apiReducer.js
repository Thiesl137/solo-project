import * as types from '../constants/actionTypes';


const initialState = {
  amount: -Infinity,
  date: new Date(),
  frequency:'',
  name: '',
  type: '',
  __v: -Infinity,
  _id: ''};

const apiReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.TEST:
      console.log('state Reducer in TEST ')
      return {
          ...state
        };

  default:
    return state;
  };
}

export default apiReducer;