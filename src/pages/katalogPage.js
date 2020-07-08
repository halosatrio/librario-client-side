import React, { Component } from "react";

import NavBar from "components/navBar";
import Footer from "components/footer";
import Breadcrumb from "components/breadcrumb";
import KatalogBuku from "./../components/katalogBuku";

class KatalogPage extends Component {
  state = {};

  componentDidMount() {
    window.title = "Librario | Katalog";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Katalog Buku", pageHref: "" },
    ];

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <KatalogBuku />
        <Footer />
      </>
    );
  }
}

export default KatalogPage;
