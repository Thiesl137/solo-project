import { combineReducers } from 'redux';

import transactionsReducer from './transactionsReducer';

const reducers = combineReducers({

  database: transactionsReducer,
});

export default reducers;