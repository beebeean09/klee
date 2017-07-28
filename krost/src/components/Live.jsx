import React from 'react';
import '../styles/live.css';

class Live extends React.Component {
  render() {
    return(
      <div className="live-main">
        <div className="live-banner"></div>
        <div className="live-list">
          <div className="live-list-items live-list-header">
            <h1>Date</h1>
            <h1>Location</h1>
            <h1>Tickets</h1>
          </div>
          <div className="live-list-items">
            <h1>July 30th</h1>
            <h1>Orange County</h1>
            <h1>FREE</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Live;
