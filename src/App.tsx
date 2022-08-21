import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import Routing from "./Routing";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>React Challenge</h1>
        <p>
          Follow the steps of the challenge you received.
        </p>
      
        <BrowserRouter basename=''>

          <ul  className='App-list'>
            <li>
              <Link className='App-link' to="/">Home</Link>
            </li>
            <li>
              <Link className='App-link' to="/scenario1">Scenario 1</Link>
            </li>
            <li>
              <Link className='App-link' to="/scenario2">Scenario 2</Link>
            </li>
          </ul>
          <hr />

          <Routing/>
        </BrowserRouter>              
      </header>
    </div>
  );
}

export default App;
