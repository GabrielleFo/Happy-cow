import React from "react";
import { useParams } from "react-router-dom";

//import du json
import data from "../assets/restaurants.json";

const Detail = () => {
  const params = useParams();
  let id = params.id;
  console.log(useParams());
  //console.log(typeof id);
  const getDetail = () => {
    for (let i = 0; i < data.length; i++) {
      console.log(typeof data[i].placeId);
      // if (data[i].placeId === Number(id)) {
      if (String(data[i].placeId === id)) {
        return data[i];
      }
    }
  };

  const detail = getDetail();
  console.log("detail=>", detail);
  return (
    <div>
      <h1>Details</h1>
      {/* <p>{detail.name}</p> */}
    </div>
  );
};

export default Detail;
