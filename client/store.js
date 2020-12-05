import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(reducers, composeWithDevTools());


store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;