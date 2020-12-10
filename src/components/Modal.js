import React from "react";
import { Link } from "react-router-dom";

import imageModal from "../assets/imgModal.jpg";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

//utilisation d'un opérateur ternaire
const Modal = ({ revele, cache }) =>
  revele ? (
    <React.Fragment>
      <div className="overlay" />

      <div className="wrapper">
        <div className="modal">
          <button type="button" className="close" onClick={cache}>
            {/* &times  sers a faire une petite croix */}
            <span>&times; </span>
          </button>
          <h3>
            We see you love HappyCow, why not login or register or get the app
            to view without limitations.
          </h3>
          <div className="logo-modal">
            <img src={apple} alt="apple" />
            <img src={google} alt="google" />
          </div>

          <div className="container-form">
            <form>
              <h1>Login to Your Account</h1>
              <label for="name">Username or Email</label>
              <input
                type="text"
                placeholder="Username or Email"
                required
              ></input>
              <label for="password">Password</label>
              <input type="password" placeholder="password" required></input>
              <button type="submit" className="login">
                Login
              </button>
              {/* <p>Or</p> */}
            </form>

            <div className="image-modal">
              <img src={imageModal} alt="happy cow modal" />
            </div>
          </div>
          <Link to="/register">
            <button className="register">Register</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  ) : null;

export default Modal;
