import React from "react";
import PropTypes from 'prop-types';
import "./commentsection.css"

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="comment">{props.coment.text}</span>
      <span className="user">{props.comment.username}</span>
    </div>
    );
  };

    Comment.propTypes={
      comment: PropTypes.shape({
        text: PropTypes.string,
        username:PropTypes.string
      })
    };
    
export default Comment;