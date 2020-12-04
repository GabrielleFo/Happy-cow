import React from "react";
import { useParams } from "react-router-dom";

//import images
import Hostel from "../assets/img/hostel.svg";
import Bakery from "../assets/img/bakery.svg";
import Catering from "../assets/img/catering.svg";
import Health from "../assets/img/health-store.svg";
import Cream from "../assets/img/ice-cream.svg";
import Juice from "../assets/img/juice-bar.svg";
import Organization from "../assets/img/organization.svg";
import Professional from "../assets/img/professional.svg";
import Other from "../assets/img/other.svg";
import Vegetarian from "../assets/img/vegetarian.svg";
import VegOptions from "../assets/img/veg-options.svg";
import Vegan from "../assets/img/vegan.svg";
import VegStore from "../assets/img/veg-store.svg";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../assets/restaurants.json";

const Result = () => {
  //  1 ere méthode
  //   const params = useParams();
  //   const search=params.search;
  //autre méthode
  const { search } = useParams();
  const getResult = () => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].address.toLowerCase().includes(search.toLowerCase()) === true
      ) {
        result.push(data[i]);
      }
    }
    return result;
  };
  const result = getResult();
  console.log(result);
  return (
    <div>
      <h1>Resultats</h1>

      <div className="result-container">
        {result.map((item, index) => {
          // création d'un tableau pour afficher les icones
          const icon = [];
          if (item.type === "Veg Store") {
            icon.push(<img src={VegStore} alt="veg-store" />);
          } else if (item.type === "vegan") {
            icon.push(<img src={Vegan} alt="vegan" />);
          } else if (item.type === "vegetarian") {
            icon.push(<img src={Vegetarian} alt="vegetarian" />);
          } else if (item.type === "Other") {
            icon.push(<img src={Other} alt="other" />);
          } else if (item.type === "Health Store") {
            icon.push(<img src={Health} alt="health" />);
          } else if (item.type === "veg-options") {
            icon.push(<img src={VegOptions} alt="veg-options" />);
          } else if (item.type === "Ice Cream") {
            icon.push(<img src={Cream} alt="cream" />);
          } else if (item.type === "Juice Bar") {
            icon.push(<img src={Juice} alt="juice" />);
          } else if (item.type === "Professional") {
            icon.push(<img src={Professional} alt="professional" />);
          } else if (item.type === "Organization") {
            icon.push(<img src={Organization} alt="organization" />);
          } else if (item.type === "Bakery") {
            icon.push(<img src={Bakery} alt="bakery" />);
          } else if (item.type === "Catering") {
            icon.push(<img src={Catering} alt="catering" />);
          } else if (item.type === "B&B") {
            icon.push(<img src={Hostel} alt="hotel" />);
          }

          //création du tableau pour afficher les étoiles
          const stars = [];

          for (let i = 1; i <= 5; i++) {
            if (item.rating === 0) {
              stars.push(
                //affichage des icones regular
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  className="icons"
                  color="gold"
                />
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
          if (item.thumbnail) {
            return (
              <div className="result-detail">
                <div className="hover-result">
                  <p> {icon}</p>
                  <p className="border">{item.type}</p>
                  <p>____________</p>
                  <h3>{item.name}</h3>
                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                </div>
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="photo-result"
                />
                <h3>{item.name}</h3>
                <p>{stars}</p>
              </div>
            );
          } else {
            return (
              <div className="result-detail">
                <div className="hover-result">
                  {icon}
                  <p className="border"></p>
                  <p>{item.type}</p>
                  <h2>{item.name}</h2>
                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                </div>
                <img
                  src={item.pictures[0]}
                  alt={item.name}
                  className="photo-result"
                />
                <h3>{item.name}</h3>
                <p>{stars}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Result;
