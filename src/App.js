import React from "react";
import "./App.css";

//import des packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import des containers
import Home from "./containers/Home";
import Restaurant from "./containers/Restaurant";
import Detail from "./containers/Detail";
import Register from "./containers/Register";
//import des composants
import Header from "./components/Header";
import Footer from "./components/Footer";
import Result from "./components/Result";

//import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faStar,
  faStarHalfAlt,
  faPhoneAlt,
  faMapMarkerAlt,
  faPen,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

import { faStar as faStars } from "@fortawesome/free-regular-svg-icons";

library.add(
  faSearch,
  faStar,
  faStarHalfAlt,
  faStars,
  faPhoneAlt,
  faMapMarkerAlt,
  faPen,
  faCamera
);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route path="/result/:search">
          <Result />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
