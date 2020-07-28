import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/navBar";
import TitleText from "../components/common/titleText";
import BookingInformation from "../components/bookingInformation";
import Button from "../components/common/button";

import { getBook } from "../services/BookService";

class CheckoutPage extends Component {
  state = {
    checkoutData: {
      name: "",
      email: "",
      phone: "",
    },
    bookData: {
      judul: "",
      penulis: "",
      imageUrl: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);

    const bookId = this.props.match.params.id;

    const book = getBook(bookId);

    this.setState({ bookData: this.mapToViewModel(book) });
  }

  mapToViewModel(book) {
    return {
      _id: book._id,
      judul: book.judul,
      penulis: book.penulis,
      imageUrl: book.imageUrl,
    };
  }

  render() {
    const { checkoutData, bookData } = this.state;
    const { checkout } = this.props;

    if (!checkout)
      return (
        <div className="container text-center mt-5">
          <h1>Error 404</h1>
          <Button
            type="link"
            className="btn py-2"
            href="/"
            isLight
            style={{ width: 200 }}
          >
            Back to Home
          </Button>
        </div>
      );

    return (
      <>
        <NavBar isCentered />
        <TitleText className="h2 mt-5">
          Informasi Peminjaman{`  `}
          <p className="lead text-gray-500 mt-2">Lengkapi form di bawah</p>
        </TitleText>
        <BookingInformation
          checkoutData={checkoutData}
          book={bookData}
          onChange={this.onChange}
          checkout={checkout}
        />
        <div className="d-flex justify-content-center mb-3">
          <Button
            type="link"
            className="btn py-2"
            href="/"
            isBlock
            isPrimary
            style={{ width: 200 }}
          >
            Pinjam Buku
          </Button>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <Button
            type="link"
            className="btn py-2"
            href="/"
            isBlock
            isLight
            style={{ width: 200 }}
          >
            Cancel
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps)(CheckoutPage);
