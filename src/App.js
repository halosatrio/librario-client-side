import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import DetailsPage from "./pages/detailsPage";
import UserGuidePage from "./pages/userGuidePage";
import KatalogPage from "./pages/katalogPage";
import CheckoutPage from "pages/checkoutPage";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/catalogue" component={KatalogPage}></Route>
        <Route exact path="/user-guide" component={UserGuidePage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
      </Router>
    </div>
  );
}

export default App;
