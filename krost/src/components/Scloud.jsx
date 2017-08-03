import React from 'react';
import '../styles/App.css';
import '../styles/scloud.css';

class Scloud extends React.Component {

  render() {
    return(
      <div className="bg-banner">
        <div className="bg-img bg-img-sc"></div>
        <div className="sc-wrapper bg-img">
          <iframe className="sc-display" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/336478397&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
        </div>
      </div>
    );
  }
}

export default Scloud;
