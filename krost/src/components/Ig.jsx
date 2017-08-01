import React from 'react';
import * as KEY from './key.js';
import Instafeed from 'instafeed.js';
import '../styles/ig.css';

class Ig extends React.Component {
  constructor(props) {
    super(props);

    this.state = { info: ''};
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    // fetch(`https://api.instagram.com/oauth/authorize/?client_id=${KEY.IG.client_id}&redirect_uri=${KEY.IG.redirect_uri}&response_type=token`)
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({info: json});
    //   });
    //   console.log(this.state.info);
    let feed = new Instafeed({
      get: 'user',
      userId: `${KEY.NAME2.user_id}`,
      accessToken: `${KEY.NAME2.token}`,
      resolution: 'standard_resolution',
      filter: function(image) {
          console.log(image);
           if (image.type === 'image') {
               image.template = '<img src="' + image.images.standard_resolution.url + '" />';
           } else {
               image.template = `<video id=${image.id} controls loop><source src="` + image.videos.standard_resolution.url + '" type="video/mp4"/></video>';
           }
           return true;
       },
      template: '<div id="ig-img">{{model.template}}</div>',
      limit: 10
    });
    feed.run();
  }

  render() {
    return(
      <div className="ig-main">
        <h1>Instagram</h1>
        <div id="instafeed">
        </div>
      </div>
    );
  }
}

export default Ig;
