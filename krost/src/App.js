import React, { Component } from 'react';
import './styles/App.css';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Live from './components/Live.jsx';
import Ig from './components/Ig.jsx';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main }/>
          <Route path="/about" component={ About }/>
          <Route path="/live" component={ Live }/>
          <Route path="/ig" component={ Ig }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
