import React, { Component } from 'react';

import "./commentsection.css"
class CommentSection extends Component {
  render() {
    return (
      <div className="CommentSection">
      <i class="far fa-heart"></i><i class="far fa-comment"></i>
      <p>300 likes</p>
      <div className="comments">
      <span className="person">Person: </span> comments n shit...
      </div>
      <div className="timestamp">
      2 hours ago
      </div>
      <form>
      <textarea placeholder="Add a comment..."></textarea>
      </form>
      </div>
      

      
    );
  }
}

export default CommentSection;