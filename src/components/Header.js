import React from "react";
import { Link } from "react-router-dom";

import LogiqueModal from "./LogiqueModal";
import Modal from "./Modal";

import Logo from "../assets/logo.svg";

const Header = () => {
  const { revele, toogle } = LogiqueModal();
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
      <div className="button-header">
        <button className="button" onClick={toogle}>
          Login/join
        </button>
      </div>

      <Modal revele={revele} cache={toogle} />
    </div>
  );
};

export default Header;
