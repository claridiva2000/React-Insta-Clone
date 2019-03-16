import React, { Component } from "react";

import Posts from "./Posts"
import "./commentsection.css"

const comments = [];


class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      getComments: comments,
      screenName:"",
      post:"",
    };
  }

inputChangeHandler = event => {
  this.setState({ [event.target.name]: event.target.value});
};

formSubmitHandler = event =>{
  event.preventDefault();
  let newPost = {
  screenName: this.state.screenName,
  post: this.state.post,
  };
  this.setState(prevState =>{
    return {
      getComments: [...prevState.getComments, newPost],
      screenName:"",
      post:""

    };
  });

};

render() {
  return(
    <div>
      <form onSubmit={this.formSubmitHandler}>
        <input name="screenName" value={this.state.screenName} onChange={this.inputChangeHandler} placeholder="Screen Name"></input>
        <textarea name="post" value={this.state.post} onChange={this.inputChangeHandler} placeholder="Leave a Comment...">

        </textarea>
        <button type="submit" >Post!</button>
      </form>

      <div className="postlist">
      {this.state.getComments.map(commentpost => (
        <Posts commentpost={commentpost} />
      ))}
      </div>
    </div>
    );
  }
}

export default CommentSection;