import React from "react";

import Button from "components/common/Button";

import bannerImage from "assets/images/katalog-banner.jpg";

const KatalogBanner = () => {
  return (
    <div className="container mb-5 katalog-banner">
      <div className="row">
        <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-5">
          <figure className="mb-4">
            <img src={bannerImage} alt="katalog" className="img-fluid" />
          </figure>
        </div>
        <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-6 mx-lg-4">
          <p className="h4 mb-3 mb-md-2 mb-lg-4 font-weight-light">
            Perpustakaan Kolektif
          </p>
          <h5 className="h2 mb-3 font-weight-bolder line-height-2 my-2">
            Katalog kami mencakup lebih dari 400 buku
          </h5>
          <p className="h6 mb-4 font-weight-light">
            bebas pilih buku yang ingin anda baca
          </p>
          <Button
            type="link"
            href="/catalogue"
            className="btn"
            isPrimary
            hasShadow
            isLarge
          >
            Telusuri Katalog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KatalogBanner;
