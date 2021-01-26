import React from "react";
import { Link } from "react-router-dom";

import imageModal from "../assets/imgModal.jpg";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

//utilisation d'un opérateur ternaire
const Modal = ({ revele, cache }) =>
  revele ? (
    <>
      <div className="overlay" />

      <div className="wrapper">
        <div className="modal">
          <button type="button" className="close" onClick={cache}>
            {/* &times  sers a faire une petite croix */}
            <p>&times; </p>
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
            <form className="form-modal">
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
              <Link to="/register">
                <button className="register" onClick={cache}>
                  Register
                </button>
              </Link>
            </form>

            <div className="image-modal">
              <img src={imageModal} alt="happy cow modal" />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;

export default Modal;
