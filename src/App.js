import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
         <h1 className="app-head">Welcome to Timer App</h1>
        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
