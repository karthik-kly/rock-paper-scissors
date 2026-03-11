import React from "react";
import logo from "../rock-paper-scissors.png"

const Header = () => {
  return (
    <header>
      <h1 className="Head" > <img className = "logo" src = {logo} /> Rock Paper Scissors   </h1>
      
    </header>
  );
};

export default Header;