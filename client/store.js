import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';


// function loadFromMongo() {
//   fetch('/api/getAllTransactions')
//       .then(res => res.json())
//       .then((transactions) => {
//         console.log('transactions in fetch is ', transactions);
//         return transactions;
//       })
//       .catch(err => {
//         console.log('Error in loadFromMongo in store.js: getAllTransactions: ERROR: ', err)
//         return undefined;
//       })
// }

// ----- ONLY LOAD DATABASE WHEN STORE IN CREATED? -----
// function saveToMongo(state) {
//   fetch('/api/getAllTransactions')
//       .then(res => res.json())
//       .then((transactions) => {
//         console.log('transactions in save to mongo is fetch is ', transactions);
//         return transactions;
//       })
//       .catch(err => console.log('Transactions.componentDidMount: get characters: ERROR: ', err));
// }

// const store = createStore(reducers, loadFromMongo() , composeWithDevTools());

// store.subscribe(() => saveToMongo(store.getState()));

const store = createStore(reducers, composeWithDevTools());

export default store;