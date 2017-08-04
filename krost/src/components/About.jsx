import React from 'react';
import Ig from './Ig.jsx';
import '../styles/about.css';
import '../styles/App.css';
import aboutImg from '../images/abtme1.png';
import FontAwesome from 'react-fontawesome';

// <div className="about-main">
class About extends React.Component {
  render() {
    return(
      <div id="about-link" className="about-wrapper scrolly">
          <div className="about-info">
            <ul className="fa-env">
              <FontAwesome
                className='env'
                name='envelope-o'
                />krostout@gmail.com</ul>
            <ul className="genre">ambient / alternative / indie / folk</ul>
            <ul>KROST is a loopin singer-songwriter based in socal, painting melodies across mellow backdrops of ambient sounds.
              She creates music conducive to tiny, warm dance parties, and has an immense love for sad songs with heartbreaking lyrics.
            </ul>
          </div>
          <img className="abtme-img" src={aboutImg} alt="abtme-img"/>
      </div>
    );
  }
}

// </div>
export default About;
