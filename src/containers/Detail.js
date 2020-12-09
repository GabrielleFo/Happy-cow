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
            <FontAwesomeIcon
              icon="phone-alt"
              className="icons-header"
              size="2x"
            />
            <div className="phone-detail">
              <h3>Contact</h3>
              <p>{detail.phone}</p>
            </div>

            <FontAwesomeIcon
              icon="map-marker-alt"
              className="icons-header"
              size="2x"
            />
            <div className="adress-detail">
              <h3>Find</h3>
              <p>{detail.address}</p>
            </div>
          </div>
          <div className="detail-detail">
            <p>{detail.description}</p>
          </div>
          <div className="button-detail">
            <button>
              <FontAwesomeIcon icon="pen" className="icons-button" size="2x" />
              Add review
            </button>
            <button>
              <FontAwesomeIcon
                icon="camera"
                className="icons-button"
                size="2x"
              />
              Add photos
            </button>
          </div>
          <div className="photos-details">
            {detail.pictures.map((item, index) => {
              return <img src={item} alt="vision" />;
            })}
            {/* <img src={detail.pictures[0]} alt="vision  " /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
