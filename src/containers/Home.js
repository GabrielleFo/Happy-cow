import React from "react";

import Logo from "../assets/accueil3.png";

import { Link } from "react-router-dom";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import du json
import data from "../assets/restaurants.json";
//console.log(data); //vérification de mon fichier json

//pour trier uniquement les restaurants
const result = data.filter((item) => item.category === 0);
//console.log(result);

//pour trier les glaciers et jus de fruits
const smoothie = data.filter(
  (item) => item.category === 13 || item.category === 12
);

//création du tableau pour afficher les étoiles
const stars = [];
for (let i = 1; i <= 5; i++) {
  if (data.rating >= i) {
    stars.push(<FontAwesomeIcon icon="star" className="icons" />);
  } else {
    stars.push();
  }
}

const Home = () => {
  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Find Vegan Food </h1>

          <form>
            <input type="text"></input>
            <button type="submit">
              <FontAwesomeIcon icon="search" className="icons" />
            </button>
          </form>
        </div>
        <img src={Logo} alt="accueil" className="image-accueil" />
      </div>
      <div className="resto-container">
        <h2>Food & product vegan</h2>
        <FontAwesomeIcon icon="starHalfAlt" className="icons" />
        <FontAwesomeIcon icon="star" className="icons" />
        <div className="resto">
          {data.map((item, index) => {
            if (index < 10) {
              return (
                <div className="food-infos">
                  {item.pictures[0] && (
                    <img
                      src={item.pictures[0]}
                      alt={item.name}
                      className="photo-resto"
                    ></img>
                  )}

                  <h3>{item.name}</h3>
                  <p>{item.address && item.address.slice(-20, -7)}</p>
                  <p>
                    {item.description && item.description.slice(0, 105) + "..."}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2>Ice cream & juice vegan</h2>
        <div className="resto">
          {smoothie.map((item, index) => {
            if (index < 10 && item.pictures[0]) {
              return (
                <div className="juice-infos">
                  {item.pictures[0] && (
                    <img
                      src={item.pictures[0]}
                      alt={item.name}
                      className="photo-resto"
                    ></img>
                  )}

                  <h3>{item.name}</h3>
                  <p>{item.address && item.address.slice(-20, -7)}</p>
                  <p>
                    {item.description && item.description.slice(0, 105) + "..."}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="resto-title">
          <h2>Vegan Restaurant Near Me</h2>
          <Link to="/restaurant">
            <h3>View all</h3>
          </Link>
        </div>

        <div className="resto">
          {result.map((item, index) => {
            if (index < 10 && (item.rating === 5 || item.rating === 4.5)) {
              return (
                <div className="resto-infos">
                  {item.pictures[0] && (
                    <img
                      src={item.pictures[0]}
                      alt={item.name}
                      className="photo-resto"
                    ></img>
                  )}

                  <h3>{item.name}</h3>
                  <p>{item.address && item.address.slice(-20, -7)}</p>
                  <p>
                    {item.description && item.description.slice(0, 105) + "..."}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
