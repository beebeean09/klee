import React, { Component } from 'react';
import './styles/App.css';
import FontAwesome from 'react-fontawesome';
import { HashRouter, Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Live from './components/Live.jsx';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main }/>
          <Route path="/about" component={ About }/>
          <Route path="/live" component={ Live }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
