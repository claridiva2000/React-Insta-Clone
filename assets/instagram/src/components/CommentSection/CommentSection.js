import React from 'react';

const CommentSection = props => {
  console.log(props);
  return (
    <div>
      {props.chats.map((comment, i) => {
        return (
          <div key={i}>
            <span>
              {comment.username}: {comment.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
