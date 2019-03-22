import React from 'react';

import "./commentsection.css"

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
      this.state ={
        comments:props.comments,
        likes: [],
        commentbox: "",
      }
  };

  changeHandler = e => {
      this.setState({[e.target.name]: e.target.value});
  };
  

  submitHandler = e => {
      e.preventDefault();
      this.setState({
        comments:[
        ...this.state.comments, 
        {username:"jazz", text: this.state.commentbox}]
      })
  };

  

  render() {
    return(
      <div>
        {this.state.comments.map( (c, i) => {
          return (
          <div key={c.id}><p><span>{c.username}</span> : {c.text} </p> </div>
          )} 

           )}


           <form >
             <textarea
             type="text"
             name="commentbox"
             value={this.state.commentbox}
             onChange={this.changeHandler}
             />
             <button>Post!</button>
           </form>

      </div>

    );

  }
}






// function CommentSection(props) {
//       return (
//         <>
//       <form>
//       <textarea placeholder="Add a comment..."></textarea>
//       </form>
//         </>      
      
//     );
//   }


export default CommentSection;