import React from 'react';
import { Link } from 'react-router-dom';

// const removeExpenseItem = () => {  // this is not need since we use the actions below 
//   console.log('testing');
// }

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return  (  // spread all the props and dispatch so we have access to them...
      <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3> {/* use the `${something}` to inject a variable into a string */}
        <p>{amount} - {createdAt}</p>
        { /* <button onClick={removeExpenseItem}>Remove</button> <-- my lame attempt */ }
      </div>
  );
}

//export default ExpenseListItem;
export default ExpenseListItem; // by "connect"ing into the redux store, we can use an action to remove the expense we want