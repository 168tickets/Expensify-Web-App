import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'; // when using named exports
import getVisibleExpenses from './selectors/expenses'; // when using export default
//import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: '2000', createdAt: 21000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: '1000', createdAt: 22000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: '109500', createdAt: 23000 }));
//store.dispatch(setTextFilter('ater'));
 
// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = ( // pass in the store (which is holding state) and call it store...
  <Provider store={store}> 
    <AppRouter />
  </Provider>
)
 
ReactDOM.render(jsx, document.getElementById('app'));