import React from "react";
import Image from "./Image"

function Header() {
  return (
    <header>
      <Image />
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#login">Login</a>
      </div>
    </header>
  );
}

export default Header;
