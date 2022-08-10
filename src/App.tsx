import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>React Challenge</h1>
        <p>
          Follow the steps of the challenge you received.
        </p>

        <a className='App-link' href='#' onClick={() => alert('Implement me!')}>Scenario 1</a>
        <a className='App-link' href='#' onClick={() => alert('Implement me!')}>Scenario 2</a>
      </header>
    </div>
  );
}

export default App;
