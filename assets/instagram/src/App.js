import React, { Component } from 'react';


import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"

import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
    <SearchBar />
    <PostContainer />
      </div>
    );
  }
}

export default App;
