// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React program.</p>
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
