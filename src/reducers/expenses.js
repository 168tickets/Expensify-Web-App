

const expensesReducerDefaultState = [];

//const expensesReducer = ( state = expensesReducerDefaultState, action ) => { // remove const if using export default
export default ( state = expensesReducerDefaultState, action ) => {
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