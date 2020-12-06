import { combineReducers } from 'redux';

import transactionsReducer from './transactionsReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  transactions: transactionsReducer,
});

export default reducers;