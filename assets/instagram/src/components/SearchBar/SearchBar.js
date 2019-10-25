import React from 'react';

import "./searchbar.css"

const SearchBar = props => {

    return (
      <div className="SearchBar">
        <div id="icon"><i className="fab fa-instagram"></i></div>
        <div id="title"><h1>Instagram</h1></div>
        <div id="search">
            <i className="fas fa-search"></i>
            <input placeholder="Search" onKeyDown={props.searchPost}></input>
        </div>
        <div id="actions">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
      </div>
      

      </div>
    );
  }


export default SearchBar;