import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

import Button from "./common/button";
import InputDate from "./common/inputDate";

const BookingForm = ({ data }) => {
  return (
    <Fade delay={500}>
      <div className="card bordered" style={{ padding: "30px 30px" }}>
        <h4 className="mb-4">Pinjam Sekarang</h4>
        <label htmlFor="date">Pilih tanggal</label>
        <InputDate name="date" />
        <h6 className="text-gray-600 font-weight-light mb-3">
          Buku{" "}
          <span
            className={`mt-3 badge font-weight-normal ${
              data.ketersediaan === "Tersedia" ? "badge-info" : "badge-danger"
            }`}
            style={{ fontSize: 14 }}
          >
            {data.ketersediaan}
          </span>{" "}
        </h6>
        <h6 className="text-gray-600 font-weight-light mb-4">
          Droppping Point: Spasso Cafe
        </h6>
        <Button
          href={`/checkout/${data._id}`}
          type="link"
          className="btn btn-primary"
        >
          Pinjam Buku
        </Button>
      </div>
    </Fade>
  );
};

BookingForm.propTypes = {
  data: propTypes.object.isRequired,
};

export default BookingForm;
