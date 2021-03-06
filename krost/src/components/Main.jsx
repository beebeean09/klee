import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { goToAnchor, removeHash } from 'react-scrollable-anchor';

class Main extends Component {
  constructor(props) {
    super(props);


    this.clickAbout = this.clickAbout.bind(this);
    this.clickLive = this.clickLive.bind(this);
  }

  clickAbout() {
    goToAnchor('about-link');
  }

  clickLive() {
    goToAnchor('live-link');
  }


  render() {
    return (
      <div className="main-wrapper">
        <div className="bg">
          <div className="bg-img bg-img-main"></div>
          <div className="sm-container bg-img">
            <div className="navbar-right">
              <a href="https://www.instagram.com/krostout/" target="_blank"
                rel="noopener noreferrer">
              <FontAwesome
                className='ig'
                name='instagram'
                size='3x'
              /></a>
              <a href="https://www.facebook.com/krostout" target="_blank"
                rel="noopener noreferrer">
                <FontAwesome
                  className='fb'
                  name='facebook-square'
                  size='3x'
              /></a>
              <a href="https://www.youtube.com/krostout" target="_blank"
                rel="noopener noreferrer">
                <FontAwesome
                  className='yt'
                  name='youtube-play'
                  size='3x'
              /></a>
              <a href="https://www.soundcloud.com/krostout" target="_blank"
                rel="noopener noreferrer">
                <FontAwesome
                  className='sc'
                  name='soundcloud'
                  size='3x'
              /></a>
              <a href="http://www.krostout.bandcamp.com" target="_blank"
                rel="noopener noreferrer">
                <FontAwesome
                  className='bc'
                  name='bandcamp'
                  size='3x'
              /></a>
            </div>
            <div className="name-header">
              <p>K</p>
              <p>R</p>
              <p>O</p>
              <p>S</p>
              <p>T</p>
            </div>
            <div className="navbar">
              <div className="sm-button" onClick={this.clickAbout}>A b o u t</div>
              <div className="sm-button " onClick={this.clickLive}>L i v e</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

// <a className="sm-button" onClick={() => this.clickAbout()}>A b o u t</a>
// <a className="sm-button" onClick={() => this.clickLive()}>L i v e</a>
