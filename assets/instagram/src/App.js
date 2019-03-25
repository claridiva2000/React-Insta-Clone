import React, { Component } from 'react';
import dummyData from "./dummy-data"

import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      Data:[]
    }
  }

  componentDidMount() {
    this.setState({Data:dummyData})
  }


  addComment= event => {
    const index = event.target.id;
    const newData = this.state.Data;
    newData[index].comments.push({username:"Lambda School", text:event.target.firstChild.value});
    this.setState({Data: newData});
  }


  incrementValue = (i) => {
    const newData = this.state.Data;
    newData[i].likes += 1;
    this.setState({Data: newData});
}

  render() {
    return (
      <div className="App">
    <SearchBar />
    {this.state.Data.map(((data,i) => <PostContainer data={data} comment={this.addComment} click={this.incrementValue}  key={i}/>))}
      </div>
    );
  }
}

export default App;
