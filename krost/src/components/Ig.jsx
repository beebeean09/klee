import React from 'react';
import * as KEY from './key.js';
import Instafeed from 'instafeed.js';
import '../styles/ig.css';
import '../styles/App.css';
import guitar from '../images/guitar.png';
import Scloud from './Scloud.jsx';

class Ig extends React.Component {
  constructor(props) {
    super(props);

    this.state = { info: ''};
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    let feed = new Instafeed({
      get: 'user',
      userId: `${KEY.NAME2.user_id}`,
      accessToken: `${KEY.NAME2.token}`,
      resolution: 'standard_resolution',
      filter: function(image) {
           if (image.type === 'image') {
               image.template = '<img src="' + image.images.standard_resolution.url + '" />';
           } else {
            //  fa-play, fa-play-circle, fa-play-circle-o
               image.template = `<div style="cursor: pointer; position: relative; width: 293px; height: 293px; overflow: hidden;">
               <i class="fa fa-play" aria-hidden="true"></i><video class="img-video" id=${image.id} controls>
                 <source src="` + image.videos.standard_resolution.url + '" type="video/mp4"/></video></div>';
           }
           return true;
       },
      template: '<div id="ig-img">{{model.template}}</div>',
      limit: 9
    });
    feed.run();
  }

  render() {
    return(
      <div className="ig-main">
        <Scloud />
        <div className="ig-header">
          <h1><a href="https://www.instagram.com/krostout/" target="_blank"
            rel="noopener noreferrer">Instagram</a></h1>
        </div>
        <div id="instafeed">
        </div>
        <div className="ig-footer">
          <h1>Want to see more?</h1>
          <a href="https://www.instagram.com/krostout/" target="_blank"
            rel="noopener noreferrer">
            <img src={guitar} alt="guitar" width="30px" height="30px"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Ig;
