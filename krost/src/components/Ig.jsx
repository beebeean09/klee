import React from 'react';
import * as KEY from './key.js';

class Ig extends React.Component {
  constructor(props) {
    super(props);


  }

  // fetchPhotos() {
  //   fetch(
  //     method: 'GET',
  //     url: ''
  //   ).then(res.)
  // }


  render() {
    const key = KEY.IG;
    console.log(key);
    return(
      <div>
        <h1>Instagram</h1>
      </div>
    );
  }
}

export default Ig;
