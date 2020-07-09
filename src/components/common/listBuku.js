import React from "react";

const ListBuku = ({ items }) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
      {items.map((book, index1) => {
        return (
          <div
            key={`buku-${index1}`}
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
  );
};

export default ListBuku;
