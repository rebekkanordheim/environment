/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color linear 800ms;

  :hover {
    background-color: black;
    color: white;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: red;
`;

function App() {
  return (
    <div>
      <BaseButton>Base button</BaseButton>
      <PrimaryButton>Base button</PrimaryButton>
    </div>
  );
}

export default App;