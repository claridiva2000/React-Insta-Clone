import React from "react";

import "../PostContainer/postcontainer.css"


import CommentSection from "../CommentSection/CommentSection"
const PostContainer = props => {
  return (
        <div>
            {props.posts.map(p => {
              return (
              <div className="post-container">
              <div className="headerbox"><img src= {p.thumbnailUrl} alt="thumbnail"/> <p>{p.username }</p></div>
              <div className="imgbox"><img src={p.imageUrl} alt="pic"/></div>
                <CommentSection comments={p.comments}/>
              </div>
              )}
          )}
        </div>
  );

}












// const PostContainer = props => {
// return(
//   <div className="posts-container">
//     {props.posts.map(p => <News key={p.imageUrl} post={p} /> )}
//   </div>
//   );
// };

export default PostContainer;



// import React from 'react';


// import "./postcontainer.css"

// function PostContainer(props) {
//     return (
//       <>
//       {props.posts.map(posts=>(
//        <div className="PostContainer">
//        <div className="screenName">
//           <img src={posts.thumbnailUrl}></img> <p>{posts.username}</p>
//         </div>
//         <div className="postImg">
//            <img src={posts.imageUrl}></img>
//          </div>

          
//          <div className="CommentSection">
//         <i class="far fa-heart"></i><i class="far fa-comment"></i>
//         <p>{posts.likes} likes</p>
//         </div>
        
//         <div className="comments">
//         {posts.comments.map(e=><p><span className="person">{e.username}</span> : {e.text}</p>)} 
//         </div>

//         <div className="timestamp">
//             2 hours ago
//       </div>

//         </div>
//       ))}
//       </>      
//     );
//   }


  

  

  
    

