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
      userId: `${KEY.IG.user_id}`,
      accessToken: `${KEY.IG.token}`,
      template: '<div id="ig-img"><a href="{{link}}"><img src="{{image}}" /></a>{{caption}}</div>',
      limit: 10
    });
    feed.run();
  }


  render() {
    return(
      <div>
        <h1>Instagram</h1>
        <div id="instafeed">
        </div>
      </div>
    );
  }
}

export default Ig;
