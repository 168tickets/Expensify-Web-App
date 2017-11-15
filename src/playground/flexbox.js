import React from 'react';
import ReactDOM from 'react-dom';

export default class FlexTest extends React.Component {
  render () {
    return (
      <div className="content">
        <header>
        <p>Th</p>
        </header>
        <div>content</div>
        <div>footer</div>
      </div>
    );
  };
}

ReactDOM.render(<FlexTest />, document.getElementById('app'));
