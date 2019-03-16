import React from "react"

function Posts(props) {
  return(
    <div className="comment-section">
    <p><span><strong>{props.comment.screenName} : </strong></span>
    {props.comments.blurb}</p>
    
    </div>
  );
}

export default Posts;