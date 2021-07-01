import React from "react";
import  {Link} from 'react-router-dom'


function Menu() {
  return (
   
      <div class="topnav" id="myTopnav">
        <Link to={'/'}>
            <a href="/#">Home</a>
        </Link>
        <Link to={'/Topics'}>
        <a href="/#">Topics</a>
        </Link>
        <Link to={'/Contact'}>
        <a href="/#">Contact</a>
        </Link>
        <Link to={'/About'}>
        <a href="/#">About</a>
        </Link>
        <Link to={'/Login'}>
        <a href="/#">Login</a>
        </Link>
      </div>
    
  );
}

export default Menu;
