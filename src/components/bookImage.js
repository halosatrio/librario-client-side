import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

const BookImage = ({ data }) => {
  return (
    <Fade delay={500}>
      <figure>
        <img src={data.imageUrl} className="img-fluid" alt={data.Judul} />
        <figcaption className="figure-caption">Cover depan</figcaption>
      </figure>
    </Fade>
  );
};

BookImage.propTypes = {
  data: propTypes.object.isRequired,
};

export default BookImage;
