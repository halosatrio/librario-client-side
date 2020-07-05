import React, { Component } from "react";

import NavBar from "components/navBar";
import Footer from "components/footer";
import Jumbotron from "components/jumbotron";
import RekomendasiBuku from "components/rekomendasiBuku";
import PilihanBuku from "components/pilihanBuku";
import KatalogBanner from "components/katalogBanner";

import landingPage from "json/landingPage.json";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refPilihanBuku = React.createRef();
  }

  componentDidMount() {
    window.title = "Librario | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <NavBar {...this.props} />
        <Jumbotron refPilihanBuku={this.refPilihanBuku} />
        <RekomendasiBuku
          refPilihanBuku={this.refPilihanBuku}
          data={landingPage.rekomendasiBuku}
        />
        <PilihanBuku data={landingPage.pilihanBuku} />
        <KatalogBanner />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
