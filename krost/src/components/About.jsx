import React from 'react';
import Ig from './Ig.jsx';
import '../styles/about.css';
import '../styles/App.css';
import aboutImg from '../images/abtme1.png';

class About extends React.Component {
  render() {
    return(
      <div className="about-wrapper">
        <div className="about-main">
          <div className="about-info">
            <ul>krostout@gmail.com</ul>
            <ul className="genre">ambient / alternative / indie / folk</ul>
            <ul>KROST is a loopin singer-songwriter based in socal, painting melodies across mellow backdrops of ambient sounds.
              She creates music conducive to tiny, warm dance parties, and has an immense love for sad songs with heartbreaking lyrics.
            </ul>
          </div>
          <img className="abtme-img" src={aboutImg} alt="abtme-img"/>
        </div>
        <Ig/>
      </div>
    );
  }
}

export default About;
