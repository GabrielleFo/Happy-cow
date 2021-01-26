import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import data from "../assets/restaurants.json";
import Marker from "./Marker";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-detail">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "AIzaSyBEuezeRusVIbI2wqnSWe4bFz5IpVYL4v8" }}
          defaultCenter={{ lat: 48.8534, lng: 2.3488 }}
          defaultZoom={12}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <Marker
            lat={data.location && data.location.lat}
            lng={data.location && data.location.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
