import React, { useState } from "react";
import Logo from "../assets/accueil2.jpg";
import Pagination from "./Pagination";

//import du json
import data from "../assets/restaurants.json";
//console.log(data); //vérification de mon fichier json

//pour trier uniquement les restaurants
const result = data.filter((item) => item.category === 0);
console.log(result);

const Restaurant = () => {
  //Get current page
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(30);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = result.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPost);

  const paginate = (toto) => setCurrentPage(toto);

  return (
    <div>
      <img src={Logo} alt="accueil" className="image-accueil" />
      <div className="resto-container">
        <Pagination
          postPerPage={postPerPage}
          totalPost={result.length}
          paginate={paginate}
        />
        <h2>Vegan Restaurant </h2>
        <div className="restaurant">
          {currentPost.map((item, index) => {
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
