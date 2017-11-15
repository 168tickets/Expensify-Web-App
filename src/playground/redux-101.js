import { createStore } from 'redux';

// ACTION GENERATOR // ACTION GENERATOR // ACTION GENERATOR // ACTION GENERATOR //
// const incrementCount = (payload = {}) => ({ // if no payload, it is set to an empty object
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// code above refactored to code below to destructure the data sent to the function 
// from payload.data to data, in this case data.incrementBy becomes incrementBy

// const incrementCount = ({ incrementBy } = {}) => ({ 
//   type: 'INCREMENT',
//   incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
// });

// code above is refactored to add a default value rather than using the ternary operator
const incrementCount = ({ incrementBy = 1 } = {}) => ({ // if no incrementBy, it is set to 1
  type: 'INCREMENT',
  incrementBy // same as incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count } = {}) => ({ // no default needed since a count is required
  type: 'SET',
  count
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
    // next line not required since we set this above in the action generator
    //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      // not needed since we set a default in the action generator
      return {
        count: state.count - action.decrementBy
      }

    case 'SET':
      return {
        count: action.count
      };

    case 'RESET':
      return {
        count: 0
      }

    default:
      return state;
  }
};

const store = createStore(countReducer); 

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// increment count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// reset count
store.dispatch(resetCount());

// increment count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));


