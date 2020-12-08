import React from "react";
import { useParams } from "react-router-dom";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import du json
import data from "../assets/restaurants.json";

const Detail = () => {
  const params = useParams();
  let id = params.id;
  console.log(useParams());
  //console.log(typeof id);
  const getDetail = () => {
    for (let i = 0; i <= data.length; i++) {
      console.log(typeof data[i].placeId);
      // if (data[i].placeId === Number(id)) {
      if (String(data[i].placeId) === id) {
        return data[i];
      }
    }
  };

  const detail = getDetail();
  console.log("detail=>", detail);
  return (
    <div>
      <div className="detail-title">
        <h1>{detail.name}</h1>
      </div>
      <div className="container-detail">
        <div className="map-detail"></div>
        <div className="description-detail">
          <div className="icons-detail">
            <FontAwesomeIcon icon="fa-phone-alt" className="icons" />
            <div className="phone-detail">
              <h3>Contact</h3>
              <p>{detail.phone}</p>
            </div>
            <FontAwesomeIcon icon="fa-map-marker-alt" className="icons" />
            <div className="adress-detail">
              <h3>Find</h3>
              <p>{detail.address}</p>
            </div>
          </div>
          <p>{detail.description}</p>
          <div className="photos-details">
            {detail.pictures.map((item, index) => {
              return <img src={item.pictures} alt="meal" />;
            })}
            {/* <img src={detail.pictures[0]} alt="meal  " /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
