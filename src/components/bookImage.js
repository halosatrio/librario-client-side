import React from "react";
import propTypes from "prop-types";

const BookImage = ({ data }) => {
  return (
    <figure>
      <img src={data.imageUrl} className="img-fluid" alt={data.Judul} />
      <figcaption className="figure-caption">Cover depan</figcaption>
    </figure>
  );
};

BookImage.propTypes = {
  data: propTypes.object.isRequired,
};

export default BookImage;
