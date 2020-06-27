import React, { Component } from "react";

import NavBar from "components/navBar";
import Footer from "components/footer";

class KatalogPage extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar {...this.props} />
        <Footer />
      </>
    );
  }
}

export default KatalogPage;
