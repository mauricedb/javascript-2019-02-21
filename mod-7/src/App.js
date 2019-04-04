import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';
import Clock from './components/Clock';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React on Hoogeveen en zo
          </a>
          <Hello firstName="Maurice" teller={2} />
          <Jokes />
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
