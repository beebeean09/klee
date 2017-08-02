import React from 'react';
import * as KEY from './key.js';
import Instafeed from 'instafeed.js';
import ModalStyle from './ModalStyle.js';
import Modal from 'react-modal';
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
      success: function(data) {
        console.log(data);
      },
      filter: function(image) {
          console.log(image);
           if (image.type === 'image') {
               console.log(image.images.standard_resolution.url);
               image.template = '<img src="' + image.images.standard_resolution.url + '" />';
           } else {
            //  fa-play, fa-play-circle, fa-play-circle-o
               image.template = `<div style="cursor: pointer; position: relative; width: 293px; height: 293px; overflow: hidden;">
               <i class="fa fa-play" aria-hidden="true"></i><video id=${image.id} controls>
                 <source src="` + image.videos.standard_resolution.url + '" type="video/mp4"/></video></div>';
           }
           return true;
       },
      template: '<div id="ig-img"><a href={{link}}>{{model.template}}</a></div>',
      limit: 30
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
