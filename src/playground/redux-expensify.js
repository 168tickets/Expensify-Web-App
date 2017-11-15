import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {} ) => ({ 
  type: 'REMOVE_EXPENSE', 
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = ( startDate ) => ({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
const setEndDate = ( endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  switch (action.type) {
    case 'ADD_EXPENSE': //return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ]; // equivalent to the line above using spread operator
    case 'REMOVE_EXPENSE': // options: prevState.options.filter((option) => optionToRemove !== option )
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => { // iterate over the expense state objects
        if (expense.id === action.id) { // the passed in id (action.id) === the current expense.id 
          return {
            ...expense, // spread the existing expense object
            ...action.updates // spread the passed in object, which overwrites any edited values
          };
        } else {
          return expense; // do not do anything if it isn't the correct id
        };
      });
    default:
      return state;
  }
};


const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = ( state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {        
        ...state,
        text: action.text
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }

      case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }

    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => { // sorts data based on passed in parameters
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Create Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: '100', createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Mt Dew', amount: '169', createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('ent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(225));

const demoState = {
  expenses: [{
    id: 'sadfasdf',
    description: 'November Rent',
    note: 'this is a note',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: 'Joe',
//   age: 49
// };

// console.log({
//   age: 43, // the object spread will overwrite this instance of age
//   ...user,
//   location: 'Fort Mill',
//   // age: 43 // in this location age in the user object will be overridden but not when above
// });

