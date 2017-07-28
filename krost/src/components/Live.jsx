import React from 'react';
import '../styles/live.css';

class Live extends React.Component {
  render() {
    return(
      <div className="live-main">
        <div className="live-banner"></div>
        <div className="live-list">
          <h1>Live</h1>
          <div className="live-list-items live-list-header">
            <ul>Date</ul>
            <ul>Venue</ul>
            <ul>Location</ul>
            <ul>Tickets</ul>
          </div>
          <div className="live-list-items">
            <ul>July 30</ul>
            <ul>DBA Bar & Gallery</ul>
            <ul>Orange County</ul>
            <ul>FREE</ul>
          </div>
          <div className="live-list-items">
            <ul>Sept 16</ul>
            <ul>Alta Coffee</ul>
            <ul>Orange County</ul>
            <ul>FREE</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Live;
