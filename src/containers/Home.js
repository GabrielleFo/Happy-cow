import React, { useState } from "react";

import Logo from "../assets/accueil3.png";

import { Link, useHistory } from "react-router-dom";

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

const Home = () => {
  let history = useHistory();
  // barre de recherche
  const [search, setSearch] = useState("");

  // const resultat = [];
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data);
  //   if (data[i].indexOf(search) !== -1) {
  //     resultat.push(data[i]);
  //   }
  // }

  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Find restaurant & Vegan Food </h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              history.push("result/" + search);
            }}
          >
            <input
              className="search-input"
              type="text"
              placeholder="Search by city or zipcode"
              value={search}
              onChange={(event) => {
                const value = event.target.value;
                setSearch(value);
              }}
            />
            <button type="submit">
              <FontAwesomeIcon icon="search" className="icons" />
            </button>
          </form>
        </div>
        <img src={Logo} alt="accueil" className="image-accueil" />
      </div>
      <div className="resto-container">
        <h2>Food & product vegan</h2>

        <div className="resto">
          {data.map((item, index) => {
            //création du tableau pour afficher les étoiles
            const stars = [];

            for (let i = 1; i <= 5; i++) {
              if (item.rating === 0) {
                stars.push(
                  //affichage des icones regular
                  <FontAwesomeIcon icon={["far", "star"]} className="icons" />
                );
              } else if (item.rating >= i) {
                stars.push(
                  <FontAwesomeIcon icon="star" className="icons" color="gold" />
                );
              } else if (
                item.rating === 4.5 ||
                item.rating === 3.5 ||
                item.rating === 2.5 ||
                item.rating === 1.5
              ) {
                stars.push(
                  <FontAwesomeIcon
                    icon="star-half-alt"
                    className="icons"
                    color="gold"
                  />
                );
                break;
              }
            }
            if (index < 10) {
              return (
                <Link to={`/detail/${item.placeId}`}>
                  <div className="food-infos">
                    {item.pictures[0] && (
                      <img
                        src={item.pictures[0]}
                        alt={item.name}
                        className="photo-resto"
                      ></img>
                    )}

                    <h3>{item.name}</h3>
                    <p>{stars}</p>
                    <p>{item.address && item.address.slice(-20, -7)}</p>
                    <p>
                      {item.description &&
                        item.description.slice(0, 105) + "..."}
                    </p>
                  </div>
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2>Ice cream & juice vegan</h2>

        <div className="resto">
          {smoothie.map((item, index) => {
            //création du tableau pour afficher les étoiles
            const stars = [];

            for (let i = 1; i <= 5; i++) {
              if (item.rating === 0) {
                stars.push(
                  //affichage des icones regular
                  <FontAwesomeIcon icon={["far", "star"]} className="icons" />
                );
              } else if (item.rating >= i) {
                stars.push(
                  <FontAwesomeIcon icon="star" className="icons" color="gold" />
                );
              } else if (
                item.rating === 4.5 ||
                item.rating === 3.5 ||
                item.rating === 2.5 ||
                item.rating === 1.5
              ) {
                stars.push(
                  <FontAwesomeIcon
                    icon="star-half-alt"
                    className="icons"
                    color="gold"
                  />
                );
                break;
              }
            }
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
                  <p>{stars}</p>
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
          <h2>Vegan Restaurant</h2>
          <Link to="/restaurant">
            <h3>View all </h3>
          </Link>
        </div>

        <div className="resto">
          {result.map((item, index) => {
            //création du tableau pour afficher les étoiles
            const stars = [];

            for (let i = 1; i <= 5; i++) {
              if (item.rating === 0) {
                stars.push(
                  //affichage des icones regular
                  <FontAwesomeIcon icon={["far", "star"]} className="icons" />
                );
              } else if (item.rating >= i) {
                stars.push(
                  <FontAwesomeIcon icon="star" className="icons" color="gold" />
                );
              } else if (
                item.rating === 4.5 ||
                item.rating === 3.5 ||
                item.rating === 2.5 ||
                item.rating === 1.5
              ) {
                stars.push(
                  <FontAwesomeIcon
                    icon="star-half-alt"
                    className="icons"
                    color="gold"
                  />
                );
                break;
              }
            }
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
                  <p>{stars}</p>
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
