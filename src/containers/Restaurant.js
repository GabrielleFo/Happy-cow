import React from "react";
import Logo from "../assets/accueil2.jpg";

//import packages
// import ReactPaginate from "react-paginate";

//import du json
import data from "../assets/restaurants.json";
//console.log(data); //vérification de mon fichier json

//pour trier uniquement les restaurants
const result = data.filter((item) => item.category === 0);
console.log(result);

const Restaurant = () => {
  return (
    <div>
      <img src={Logo} alt="accueil" className="image-accueil" />
      <div className="resto-container">
        <h2>Vegan Restaurant </h2>
        <div className="restaurant">
          {result.map((item, index) => {
            // if (item.pictures[0]) {
            return (
              <div className="resto-detail">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="photo-resto"
                ></img>
                <h3>{item.name}</h3>
                <p>{item.address}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
