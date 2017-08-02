import React from 'react';
import Ig from './Ig.jsx';
import '../styles/about.css';

class About extends React.Component {
  render() {
    return(
      <div className="about-wrapper">
        <div className="about-main">
          <h1>About Me Section</h1>
        </div>
        <Ig/>
      </div>
    );
  }
}

export default About;
