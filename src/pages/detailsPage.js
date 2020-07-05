import React, { Component } from "react";

import NavBar from "components/navBar";
import DetailBuku from "components/detailBuku";
import Breadcrumb from "components/breadcrumb";
import Footer from "components/footer";
import PilihanBuku from "components/pilihanBuku";
import KatalogBanner from "components/katalogBanner";

import itemDetails from "json/itemDetails.json";

class DetailsPage extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Detail Buku", pageHref: "" },
    ];

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <DetailBuku data={itemDetails} />
        <PilihanBuku data={itemDetails.pilihanBuku} />
        <KatalogBanner />
        <Footer />
      </>
    );
  }
}

export default DetailsPage;
