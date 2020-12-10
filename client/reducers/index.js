import { combineReducers } from 'redux';

import transactionsReducer from './transactionsReducer';
import feedbackReducer from './feedbackReducer';
import billsReducer from './billsReducer';

const reducers = combineReducers({

  transactionsDB: transactionsReducer,
  feedback: feedbackReducer,
  billsDB: billsReducer,
});

export default reducers;