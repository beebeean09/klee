import React from 'react';
import '../styles/live.css';
import '../styles/App.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

class Live extends React.Component {

  componentWillMount() {
    configureAnchors({scrollDuration: 350});
  }

  render() {
    return(
      <ScrollableAnchor id="live-link">
        <div className="live-main">
          <div className="bg-banner">
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
              <ul>Sept 16</ul>
              <ul>Alta Coffee</ul>
              <ul>506 31st St. Newport Beach, CA 92663</ul>
              <ul>FREE</ul>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Live;
