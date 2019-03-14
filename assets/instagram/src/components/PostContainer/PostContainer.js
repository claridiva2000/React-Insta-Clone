import React, { Component } from 'react';

import "./postcontainer.css"
class PostContainer extends Component {
  render() {
    return (
      <div className="PostContainer">
        <div className="screenName">
            <img src="https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"></img> <p>usernamehere</p>
        </div>
            <div className="postImg">
            <img src="https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg"></img>
        </div>

      </div>
      

      
    );
  }
}

export default PostContainer;