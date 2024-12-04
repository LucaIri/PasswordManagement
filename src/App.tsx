import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const subNumbers = (num1: number, num2: number) => {
    const result = num1 - num2;
    return result
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> {subNumbers(6,2)}</div>
      </header>
    </div>
  );
}

export default App;
