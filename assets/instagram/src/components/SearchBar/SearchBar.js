import React, { Component } from 'react';

import "./searchbar.css"
class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
      <div id="icon"><i class="fab fa-instagram"></i></div>
      <div id="title"><h1>Instagram</h1></div>
      <div id="search">
        <i class="fas fa-search"></i>
        <input placeholder="Search"></input>
      </div>
      <div id="actions">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </div>
      

      </div>
    );
  }
}

export default SearchBar;