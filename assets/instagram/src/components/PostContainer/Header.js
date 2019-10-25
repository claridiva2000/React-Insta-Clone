import React from "react";


const Header = props => {
  return (
    <div className="header-wrap">
    {/* flex this */}
      <div className="thumbnail">
        <img alt="thumbpic" className="thumbpic" src={props.thumbnailUrl} />
      </div>
      <div className="screen-name">{props.username}</div>
    </div>
  );

};

export default Header;