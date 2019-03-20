import React from "react";

import CommentSection from "../CommentSection/CommentSection"
import LikeClicks from "./LikeClicks"
import Header from "./Header";

class Post extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state= {
      likes:props.post.likes,
      posts:[]
    };
  }


  render() {
    return (
      <div classname="postcontainer">
      <Header username={this.props.post.username} 
              thumbnailUrl={this.props.post.thumbnailURL}
      />
      <LikeClicks likes={this.state.like}
                  incrementLike={this.state.like} 
      />
      <CommentSection postId={this.props.post.imageUrl}
                      comments={this.props.post.comments}
      />
      
      </div>
    );
  }
}





export default Post;