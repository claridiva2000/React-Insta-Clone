import React from 'react';

import "./searchbar.css"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
      this.state ={
        
        filtered: [],
        search:"",
      };
  
  }

componentDidMount() {
  this.setState({
    filtered:this.props.results
  });
}

  // changeHandler = e => {
  //   this.setState({[e.target.name]:e.target.value});
  // };

  submitHandler = e =>{
    e.preventDefault();
    
  }


render(){
  return(
    <div className="search-bar">

    <form 
    onSubmit={this.props.searchbarHandler}
    >
      <input 
      name="search"
      placeholder="Search"
      type="text"
      value={this.props.search}
      onChange={this.props.changeHandler}
      />
      <input type="submit"/>
     </form>
    </div>
    );
  }
}








// const SearchBar = (props) => {
//     return (
//       <div className="SearchBar">
//       <div id="icon"><i class="fab fa-instagram"></i></div>
//       <div id="title"><h1>Instagram</h1></div>
//       <div id="search">
//         <i class="fas fa-search"></i>
//         <input placeholder="Search" type="text" onKeyDown={props.searchPosts}></input>
//       </div>
//       <div id="actions">
//         <i class="far fa-compass"></i>
//         <i class="far fa-heart"></i>
//         <i class="far fa-user"></i>
//       </div>
      

//       </div>
//     );
//   }


export default SearchBar;