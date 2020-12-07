import { combineReducers } from 'redux';

import transactionsReducer from './transactionsReducer';
import feedbackReducer from './feedbackReducer';

const reducers = combineReducers({

  database: transactionsReducer,
  feedback: feedbackReducer,
});

export default reducers;