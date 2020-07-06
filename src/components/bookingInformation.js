import React from "react";
import Fade from "react-reveal/Fade";

import InputText from "./common/inputText";

const BookingInformation = (props) => {
  const { data, ItemDetails } = props;

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ marginBottom: 30 }}
      >
        <div
          className="col-10 col-sm-8 col-md-5 col-lg-4 py-3"
          // style={{ paddingRight: 80 }}
        >
          <Fade>
            <div className="card">
              <figure className="img-wrapper" style={{ height: 400 }}>
                <img
                  src={ItemDetails.imageUrl}
                  alt={ItemDetails.Judul}
                  className="img-fluid"
                />
              </figure>
              <div className="meta-wrapper pr-5">
                <h5>{ItemDetails.Judul}</h5>
                <span className="text-gray-500">{ItemDetails.Penulis}</span>
              </div>
            </div>
          </Fade>
        </div>
        <div className="d-none d-md-block col-1"></div>
        <div
          className="col-10 col-sm-8 col-md-5 col-lg-4 py-5"
          // style={{ paddingLeft: 80 }}
        >
          <Fade delay={300}>
            <h5
              className="font-weight-light mb-5"
              style={{ fontSize: "1.1rem" }}
            >
              {"Tanggal Pinjam: "}
              <span
                className="font-weight-light badge badge-primary"
                style={{ fontSize: "1.1rem" }}
              >
                14 Jul - 28 Jul
              </span>
            </h5>
            <label htmlFor="name">Nama Lengkap</label>
            <InputText
              id="name"
              name="name"
              value={data.name}
              onChange={props.onChange}
            />

            <label htmlFor="email">Alamat Email</label>
            <InputText
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={props.onChange}
            />

            <label htmlFor="phone">Nomor Telepon</label>
            <InputText
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              onChange={props.onChange}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
