import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.addMenu = this.addMenu.bind(this);
  }


  addMenu(x) {
    console.log(x.target);
    x.target.classList.toggle('change');
  }

  render() {
    return (
        <div id="bg">
          <div className="navbar">
            <li className="dropdown-ham" onClick={this.addMenu}>
              <ul className="dropdown-content">
                <ul>About Me</ul>
                <ul>Listen</ul>
                <ul>Live</ul>
                <ul>Contact</ul>
              </ul>
            </li>
          </div>
          <div className="bg-img"></div>
            <div className="sm-container">
              <div className="name-header">
                <p>K</p>
                <p>R</p>
                <p>O</p>
                <p>S</p>
                <p>T</p>
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
