import React, { Component } from "react";

import NavBar from "components/navBar";
import Breadcrumb from "components/breadcrumb";
import Footer from "components/footer";
// import PilihanBuku from "components/pilihanBuku";
import BannerKatalog from "components/bannerKatalog";
import TitleText from "components/common/titleText";
import BookImage from "./../components/bookImage";
import BookDetail from "./../components/bookDetail";
import BookingForm from "./../components/bookingForm";

// import itemDetails from "json/itemDetails.json";
// import itemDetails from "json/landingPage.json";

import { getBook } from "./../services/BookService";

class DetailsPage extends Component {
  state = {
    data: {
      isbn: "",
      judul: "",
      genre: "",
      penulis: "",
      penerbit: "",
      kondisi: "",
      ketersediaan: "",
      imageUrl: "",
    },
  };

  componentDidMount() {
    window.title = "Librario | Detail Buku";
    window.scrollTo(0, 0);

    const bookId = this.props.match.params.id;

    const book = getBook(bookId);

    this.setState({ data: this.mapToViewModel(book) });
  }

  mapToViewModel(book) {
    return {
      _id: book._id,
      genre: book.genre.name,
      isbn: book.isbn,
      judul: book.judul,
      penulis: book.penulis,
      penerbit: book.penerbit,
      kondisi: book.kondisi,
      ketersediaan: book.ketersediaan,
      imageUrl: book.imageUrl,
    };
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Detail Buku", pageHref: "" },
    ];

    const { data } = this.state;

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <TitleText isBold>{data.judul}</TitleText>
        <section className="container mb-5">
          <div className="row justify-content-around">
            <div className="col-10 col-md-6 col-lg-6 col-xl-5 mb-4">
              <BookImage data={data} />
            </div>
            <div className="deskripsi-buku col-11 col-md-6 col-lg-6 col-xl-5">
              <BookDetail data={data} />
              <BookingForm data={data} />
            </div>
          </div>
        </section>
        {/* <PilihanBuku data={itemDetails.pilihanBuku} /> */}
        <BannerKatalog />
        <Footer />
      </>
    );
  }
}

export default DetailsPage;
