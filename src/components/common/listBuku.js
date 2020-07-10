import React from "react";
import Fade from "react-reveal/Fade";

const ListBuku = ({ items }) => {
  return (
    <Fade>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
        {items.map((book, index) => {
          return (
            <div
              key={`buku-${index}`}
              className="col-6 col-md-5 offset-md-1 col-lg-3 offset-lg-0 mb-5"
            >
              <div className="card">
                <figure className="img-wrapper" style={{ maxHeight: 300 }}>
                  <img
                    src={book.imageUrl}
                    alt={book.judul}
                    className="img-fluid"
                  />
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
