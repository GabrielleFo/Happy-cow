import React from "react";
import community from "../assets/community.jpg";

const Register = () => {
  return (
    <div className="container-register">
      <div className="image-register">
        <img src={community} alt="community" />
      </div>
      <div className="wrapper-register">
        <h1>Join the largest vegan and vegetarian community in the world.</h1>
        <form className="form-register">
          <label for="name">Username </label>
          <input type="text" placeholder="Username " required></input>
          <label for="name"> Email</label>
          <input type="text" placeholder="Email" required></input>
          <label for="password">Password</label>
          <input type="password" placeholder="password" required></input>
          <label for="VegStatus">Veg status</label>
          <select>
            <option value="vegan">Vegan</option>
            <option value="raw">Raw</option>
            <option value="Vegetarian" selected>
              Vegetarian
            </option>
            <option value="MostlyVeg">Mostly Veg</option>
            <option value="NonVeg">Non Veg</option>
            <option value="Herbivore">Herbivore</option>
            <option value="Fuitarian">Fuitarian</option>
          </select>
          <label for="start">Birth date</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="1910-01-01"
            max="2006-12-31"
          ></input>
          <label for="city">Your Home City</label>
          <input type="text" placeholder="Your Home City " required></input>
          <button type="submit" className="login">
            register
          </button>
          {/* <p>Or</p> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
