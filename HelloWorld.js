// File: HelloWorld.js

import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default HelloWorld;
// File: index.js

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
