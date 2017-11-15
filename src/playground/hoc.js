// Higher Order Component HOC - a component that renders another component
// goals of HOC:
// Reuse Code
// Prop manipulatin
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// not a HOC
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info - DO NOT SHARE!</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (    
    <div>
      { props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Please login to continue.</p>) }    
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));