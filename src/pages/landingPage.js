import React, { Component } from "react";

import NavBar from "components/navBar";
import Footer from "components/footer";
import Jumbotron from "components/jumbotron";
import RekomendasiBuku from "components/rekomendasiBuku";
import PilihanBuku from "components/pilihanBuku";

import landingPage from "json/landingPage.json";

class LandingPage extends Component {
  componentDidMount() {
    window.title = "Librario | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <NavBar {...this.props} />
        <Jumbotron />
        <RekomendasiBuku data={landingPage.rekomendasiBuku} />
        <PilihanBuku data={landingPage.pilihanBuku} />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
