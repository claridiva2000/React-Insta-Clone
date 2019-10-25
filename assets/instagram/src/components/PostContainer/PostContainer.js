import React from "react";

import Post from "./Post"
import "./postcontainer.css"

const PostContainer = props => {
  console.log(props);
  return (
    <div className="posts-container">
      {props.posts.map(p => <Post key={p.id} post={p} />)}
    </div>
  );
};


export default PostContainer;

  

  
    

