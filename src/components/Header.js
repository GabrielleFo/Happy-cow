import React from "react";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Happy cow" className="logo" />
    </div>
  );
};

export default Header;
