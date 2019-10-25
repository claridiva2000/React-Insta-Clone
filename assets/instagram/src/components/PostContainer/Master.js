import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from '../../dummy-data';


class Master extends React.Component {
constructor() {
  super();
  this.state={
    posts: [],
    filterposts: []
  };
}

componentDidMount() {
  console.log('cdm invoked')
  this.setState({posts: dummyData })
}

searchPostsHandler = e => {
  const posts = this.state.posts.filter(p => {
    if (p.username.includes(e.target.value)) {
      return p;
    }
  });
  this.setState({ filteredPosts: posts });
};


render() {
  console.log('render invoked')
  return(
      <div className="App">
      <SearchBar 
        searchTerm={this.state.searchTerm}
        searchPosts={this.searchPostHandler}
      />

      <PostContainer 
        posts={
          this.state.filteredPosts.length > 0
          ? this.state.filteredPosts:
          this.state.posts
        }
      
      />
      

      </div>

    );
  }
}


export default Master;
