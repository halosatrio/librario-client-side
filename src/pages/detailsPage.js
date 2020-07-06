import React, { Component } from "react";

import NavBar from "components/navBar";
import DetailBuku from "components/detailBuku";
import Breadcrumb from "components/breadcrumb";
import Footer from "components/footer";
import PilihanBuku from "components/pilihanBuku";
import KatalogBanner from "components/katalogBanner";
import TitleText from "components/common/titleText";

import itemDetails from "json/itemDetails.json";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Librario | Detail Buku";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Detail Buku", pageHref: "" },
    ];

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <TitleText isBold>{itemDetails.Judul}</TitleText>
        <DetailBuku data={itemDetails} />
        <PilihanBuku data={itemDetails.pilihanBuku} />
        <KatalogBanner />
        <Footer />
      </>
    );
  }
}

export default DetailsPage;
