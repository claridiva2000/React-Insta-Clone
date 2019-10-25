import React from 'react';

import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }



  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = e => {
    e.preventDefault();
    let newComment = { text: this.state.comment, username: 'jazz' };
    this.props.addComment(newComment)
    this.setState({ comment: '' });
  
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentForm
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}


export default CommentSection;





// import React from "react";

// class CommentSection extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state ={
//       posts:""
//     };
//   }

//   changeHandler = e => {
//     this.setState({[e.target.name]: e.target.value});
//   };

//   submitHandler = e => {
//     e.preventDefault();
//     let id = Date.now()
//     let newComment = {post:this.state.post, id};
//     this.props.addComment(newComment);
//     this.setState({ post: "" });
//   };


//   render(){
//     return(
//       <form onSubmit={this.submitHandler}>
//         <textarea type="text" 
//         name="post"
//         placeholder= "Leave a comment"
//         value={this.state.post} 
//         onChange={this.changeHandler}>
//         </textarea>
//         <button type="submit">Post!</button>
//       </form>
//     );
//   }
// }




// export default CommentSection;
















// import React from 'react';

// import CommentSection from "./CommentSection/CommentSection"
// import "./postcontainer.css"


// import "./commentsection.css"

// const comments = [];


// class PostContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       getComments: comments,
//       screenName:"",
//       post:"",
//     };
//   }

// inputChangeHandler = event => {
//   this.setState({ [event.target.name]: event.target.value});
// };

// formSubmitHandler = event =>{
//   event.preventDefault();
//   let newPost = {
//   screenName: this.state.screenName,
//   post: this.state.post,
//   };
//   this.setState(prevState =>{
//     return {
//       getComments: [...prevState.getComments, newPost],
//       screenName:"",
//       post:""

//     };
//   });

// };

// render() {
//   return(
//     <div>
//       <form onSubmit={this.formSubmitHandler}>
//         <input name="screenName" value={this.state.screenName} onChange={this.inputChangeHandler} placeholder="Screen Name"></input>
//         <textarea name="post" value={this.state.post} onChange={this.inputChangeHandler} placeholder="Leave a Comment...">

//         </textarea>
//         <button type="submit" >Post!</button>
//       </form>

//       <div className="postlist">
//       {this.state.getComments.map(commentpost => (
//         <CommentSection commentpost={commentpost} />
//       ))}
//       </div>
//     </div>
//     );
//   }
// }










  
    

