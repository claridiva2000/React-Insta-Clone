import React, { Component } from 'react';

import CommentSection from "./components/CommentSection/CommentSection"
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/SearchBar"
import PostContainer from "./components/PostContainer/PostContainer"

import './App.css';

class App extends Component {
constructor() {
  super();
  this.state ={
    posts: dummyData
  };
}


  render() {
    return (
      <div className="App">
    <SearchBar />
    <PostContainer posts={this.state.posts}/>
    <CommentSection />
      </div>
    );
  }
}

export default App;
