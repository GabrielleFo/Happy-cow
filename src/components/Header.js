import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="Happy cow" className="logo" />
      </Link>
      <Link to="/restaurant">
        <span>RESTAURANTS</span>
      </Link>
      <span>FOOD & PRODUCT </span>
      <span>ICE CREAM & JUICES</span>
    </div>
  );
};

export default Header;
