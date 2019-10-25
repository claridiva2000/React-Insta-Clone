import React from "react"

function Posts(props) {
  return(
    <div className="comment-section">
    <p><span><strong>{props.commentpost.screenName} : </strong></span>
    {props.commentpost.post}</p>
    
    </div>
  );
}

export default Posts;