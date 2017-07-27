import React, { Component } from 'react';
import './styles/App.css';
import FontAwesome from 'react-fontawesome';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Live from './components/Live.jsx';

class App extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <Route exact path="/" component={ Main }/>
          <Route path="/about" component={ About }/>
          <Route path="/live" component={ Live }/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
