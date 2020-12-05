import { combineReducers } from 'redux';

import apiReducer from './apiReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  api: apiReducer,
});

export default reducers;