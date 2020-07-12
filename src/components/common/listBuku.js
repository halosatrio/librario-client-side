import React from "react";
import Fade from "react-reveal/Fade";

import Button from "components/common/button";

const ListBuku = ({ items }) => {
  return (
    <Fade>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
        {items.map((book, index) => {
          return (
            <div
              key={index}
              className="col-6 col-md-5 offset-md-1 col-lg-3 offset-lg-0 mb-5"
            >
              <div className="card">
                <figure className="img-wrapper" style={{ maxHeight: 300 }}>
                  <Button
                    type="link"
                    href={`/books/${book._id}`}
                    className="stretched-link d-block"
                  >
                    <img
                      src={book.imageUrl}
                      alt={book.judul}
                      className="img-fluid"
                    />
                  </Button>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </Fade>
  );
};

export default ListBuku;
