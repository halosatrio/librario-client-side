import React, { Component } from "react";

import NavBar from "components/navBar";
import TitleText from "components/common/titleText";
import BookingInformation from "components/bookingInformation";
import Button from "components/common/button";

import itemDetails from "json/itemDetails.json";

class CheckoutPage extends Component {
  state = {
    data: {
      name: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
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
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <NavBar isCentered />
        <TitleText className="h2 mt-5">
          Informasi Peminjaman{`  `}
          <p className="lead text-gray-500 mt-2">Lengkapi form di bawah</p>
        </TitleText>
        <BookingInformation
          data={data}
          ItemDetails={itemDetails}
          onChange={this.onChange}
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

export default CheckoutPage;
