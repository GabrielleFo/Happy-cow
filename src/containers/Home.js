import React from "react";

import Logo from "../assets/accueil.webp";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import du json
import data from "../assets/restaurants.json";
//console.log(data); //vérification de mon fichier json

//pour trier uniquement les restaurants
const result = data.filter((item) => item.category === 0);
//console.log(result);

//pour trier les boutiques
const shop = data.filter((item) => item.category === 2);
//console.log(shop);

//pour trier les glaciers et jus de fruits
const smoothie = data.filter(
  (item) => item.category === 13 || item.category === 12
);

const Home = () => {
  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Find Vegan Restaurants Nearby</h1>
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
        <h2>Vegan Restaurant Near Me</h2>
        <div className="resto">
          {result.map((item, index) => {
            if (index < 10) {
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
                  <p>{item.description}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2>Food & product vegan</h2>
        <div className="resto">
          {shop.map((item, index) => {
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
                  <p>{item.description}</p>
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
                  <p>{item.description}</p>
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
