import React from 'react';

import CommentSection from "./CommentSection/CommentSection"
import "./postcontainer.css"

function PostContainer(props) {
    return (
      <>
      {props.posts.map(posts=>(
       <div className="PostContainer">
       <div className="screenName">
          <img src={posts.thumbnailUrl}></img> <p>{posts.username}</p>
        </div>
        <div className="postImg">
           <img src={posts.imageUrl}></img>
         </div>

          
         <div className="CommentSection">
        <i class="far fa-heart"></i><i class="far fa-comment"></i>
        <p>{posts.likes} likes</p>
        </div>
        
        <div className="comments">
        {posts.comments.map(e=><p><span className="person">{e.username}</span> : {e.text}</p>)} 
        </div>

        <div className="timestamp">
            2 hours ago
      </div>
      <CommentSection />

        </div>
      ))}
      </>      
    );
  }


  

  

  
    

export default PostContainer;