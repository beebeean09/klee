import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';

// <h1>K  R  I  S  T  E  N   L  E  E</h1>
class App extends Component {
  render() {
    return (
        <div id="bg">
          <div className="bg-img"></div>
            <div className="sm-container">
              <div className="name-header">
                <p>K</p>
                <p>R</p>
                <p>I</p>
                <p>S</p>
                <p>T</p>
                <p>E</p>
                <p>N</p>
                <p>L</p>
                <p>E</p>
                <p>E</p>
              </div>
              <a className="sm-button"
                href="https://www.youtube.com/user/kristennnlee"
                target="_blank"
                rel="noopener noreferrer">WATCH THE VIDEO</a>
            </div>
        </div>
    );
  }
}

// <div className="App">
  // <div className="App-header">
  //   <div className="splash-img"></div>
  // </div>
// </div>
// <img alt="splash" className="splash-img" src="../src/images/vlee1.jpg"/>
// <img src={logo} className="App-logo" alt="logo" />
// <h2>Welcome to React</h2>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
export default App;
