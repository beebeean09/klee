import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Live from './components/Live.jsx';
import Ig from './components/Ig.jsx';

class App extends Component {
  render() {
    return(
      <div className="main">
        <Main />
        <About />
        <Live />
        <Ig />
      </div>
    );
  }
}

export default App;
