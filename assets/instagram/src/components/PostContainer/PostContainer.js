import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
// import PropTypes from 'prop-types'

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
 


  render() {
    return (
      <div>
        <div>
          <img src={this.props.data.thumbnailUrl} alt="thmb" />
          {this.props.data.username}
        </div>
        <img src={this.props.data.imageUrl} alt="url" />
        <CommentSection chats={this.props.data.comments}/>
        <form>
          <textarea placeholder='leave a comment...'></textarea>
        <button>Post!</button>
        </form>
        
        <div>
          <i className="fas fa-heart" onClick={()=>this.state.counter + 1}/>
          {this.props.data.likes}
        </div>
        <div>{this.props.data.timestamp}</div>
      </div>
    );
  }
}

export default PostContainer;
