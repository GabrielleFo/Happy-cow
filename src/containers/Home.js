import React from "react";

import Logo from "../assets/accueil.webp";

//import du json
import data from "../assets/restaurants.json";
//console.log(data); //vérification de mon fichier json
const result = data.filter((item) => item.category === 0);
console.log(result);
const Home = () => {
  return (
    <div className="resto-container">
      <div className="form-container">
        <div className="form">
          <h2>Find Vegan Restaurants Nearby</h2>
          <form>
            <input type="text"></input>
            <input type="submit"></input>
          </form>
        </div>

        <img src={Logo} alt="accueil" className="image-accueil" />
      </div>
      {/* <p>{data[0].name}</p> */}
      {result.map((item, index) => {
        return (
          <div className="resto-infos">
            {item.pictures[0] && (
              <img
                src={item.pictures[0]}
                alt={item.name}
                className="photo-resto"
              ></img>
            )}

            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
