import React from "react";
import "./App.css";

//import des packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import des containers
import Home from "./containers/Home";

//import des composants
import Header from "./components/Header";

//import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
