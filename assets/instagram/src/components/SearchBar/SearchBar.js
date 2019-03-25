import React from 'react';
import './searchbar.css'


const SearchBar = props => {
  return (
    <div className="search-bar">
    <i className="fab fa-instagram"></i>
      <h1 className="logo">Instagram</h1>
      <form onSubmit={() => console.log('search this shit')}>
        <input name="search" placeholder="search" />
        <button>search</button>
      </form>
      <div className="icons">
        <i className="far fa-heart" />
        <i className="far fa-compass" />
        <i className="far fa-user"></i>
      </div>
    </div>
  );
};

export default SearchBar;
