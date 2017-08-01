import React from 'react';
import '../styles/live.css';
import '../styles/App.css';

// <div className="bg">
//   <div className="bg-img bg-img-live"></div>
// </div>
class Live extends React.Component {
  render() {
    return(
      <div className="live-main">
          <div className="bg">
            <div className="bg-img bg-img-live "></div>
          </div>
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
            <ul>256 S. Main St. Pomona, CA 91766</ul>
            <ul>FREE</ul>
          </div>
          <div className="live-list-items">
            <ul>Sept 16</ul>
            <ul>Alta Coffee</ul>
            <ul>506 31st St. Newport Beach, CA 92663</ul>
            <ul>FREE</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Live;
