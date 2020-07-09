import React, { Component } from "react";

import NavBar from "components/navBar";
import Breadcrumb from "components/breadcrumb";
import Footer from "components/footer";
import PilihanBuku from "components/pilihanBuku";
import BannerKatalog from "components/bannerKatalog";
import TitleText from "components/common/titleText";
import BookImage from "./../components/bookImage";
import BookDetail from "./../components/bookDetail";
import BookingForm from "./../components/bookingForm";

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
        <section className="container mb-5">
          <div className="row justify-content-around">
            <div className="col-10 col-md-6 col-lg-6 col-xl-5 mb-4">
              <BookImage data={itemDetails} />
            </div>
            <div className="deskripsi-buku col-11 col-md-6 col-lg-6 col-xl-5">
              <BookDetail data={itemDetails} />
              <BookingForm data={itemDetails} />
            </div>
          </div>
        </section>
        <PilihanBuku data={itemDetails.pilihanBuku} />
        <BannerKatalog />
        <Footer />
      </>
    );
  }
}

export default DetailsPage;
