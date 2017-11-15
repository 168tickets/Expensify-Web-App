import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
    <NavLink to="/create" activeClassName="isActive" exact={true}>Add Expense</NavLink> : 
    <NavLink to="/help" activeClassName="isActive">Help</NavLink> : 
    <NavLink to="/" activeClassName="isActive">Dashboard</NavLink>
    </div>
  </header>
);

export default Header;