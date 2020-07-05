import React from "react";

// import Button from "./common/Button";

const KatalogBuku = () => {
  return (
    <>
      <div className="container mb-5 katalog-buku">
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <h5 className="mb-2 pl-2">Genre Buku</h5>
            <ul class="list-group">
              <li class="list-group-item">Novel</li>
              <li class="list-group-item">Nonfiksi</li>
              <li class="list-group-item">Puisi</li>
              <li class="list-group-item">Self-Help</li>
              <li class="list-group-item">Kumpulan Cerpen</li>
            </ul>
          </div>
          <div className="col">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KatalogBuku;
