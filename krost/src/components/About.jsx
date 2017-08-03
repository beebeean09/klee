import React from 'react';
import Ig from './Ig.jsx';
import '../styles/about.css';
import '../styles/App.css';
import aboutImg from '../images/abtme5.png';

// <div className="bg about-me-img-wrapper">
//   <div className="bg-img about-me-img"></div>
// </div>
class About extends React.Component {
  render() {
    return(
      <div className="about-wrapper">
        <div className="about-main">
          <img className="abtme-img" src={aboutImg} alt="abtme-img"/>
          <div className="about-info">
            <ul>krostout@gmail.com</ul>
            <ul>ambient / alternative / indie / folk</ul>
            <ul>KROST is a loopin singer-songwriter based in socal, painting melodies across mellow backdrops of ambient sounds.
              She creates music conducive to tiny, warm dance parties, and has an immense love for sad songs with heartbreaking lyrics.
            </ul>
          </div>
        </div>
        <Ig/>
      </div>
    );
  }
}

export default About;
