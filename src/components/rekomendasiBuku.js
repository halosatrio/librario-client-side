import React from "react";
import Button from "components/common/Button";

const RekomendasiBuku = (props) => {
  return (
    <section className="container mb-4" ref={props.refPilihanBuku}>
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
                    className="stretched-link d-block"
                  >
                    <h5>{item.Judul}</h5>
                  </Button>
                  <span>{item.Penulis}</span>
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
