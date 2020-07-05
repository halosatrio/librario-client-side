import React from "react";
import Button from "components/common/Button";

const PilihanBuku = ({ data }) => {
  return data.map((pilihan, index1) => {
    return (
      <section key={`pilihan=${index1}`} className="container mb-5">
        <h4 className="mb-3 font-weight-medium">{pilihan.name}</h4>
        <div className="row">
          {pilihan.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this pilihan
              </div>
            </div>
          ) : (
            pilihan.items.map((item, index2) => {
              return (
                <div
                  key={`pilihan-${index1}-item-${index2}`}
                  className="col-6 col-md-5 offset-md-1 col-lg-3 offset-lg-0 mb-4"
                >
                  <div className="card">
                    {item.isPopular && <div className="tag">Populer</div>}
                    <figure className="img-wrapper" style={{ maxHeight: 300 }}>
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
            })
          )}
        </div>
      </section>
    );
  });
};

export default PilihanBuku;
