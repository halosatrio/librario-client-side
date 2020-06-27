import React from "react";
import Button from "components/Button";

const RekomendasiBuku = (props) => {
  return (
    <section className="container mb-4">
      <h4 className="mb-3 font-weight-medium text-center">Rekomendasi Buku</h4>
      <div className="row">
        {props.data.map((item, index) => {
          return (
            <div
              key={`rekomendasi-${index}`}
              className="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-0 mb-4"
            >
              <div className="card">
                <div className="tag">{item.Genre}</div>
                <figure className="img-wrapper" style={{ maxHeight: 400 }}>
                  <img
                    src={item.imageUrl}
                    alt={item.Judul}
                    className="img-fluid"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`/properties/${item._id}`}
                    className="stretched-link d-block text-gray-800"
                  >
                    <h5>{item.Judul}</h5>
                    <span className="text-gray-500">{item.Penulis}</span>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RekomendasiBuku;
