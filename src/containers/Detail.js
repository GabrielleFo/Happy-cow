import React from "react";
//import du json
import data from "../assets/restaurants.json";

const Detail = () => {
  return (
    <div>
      <h1>Details</h1>
      <p>{data.name}</p>
    </div>
  );
};

export default Detail;
