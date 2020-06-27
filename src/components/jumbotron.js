/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import panel1 from "../assets/images/panel1.png";
import panel2 from "../assets/images/panel2.png";
import panel3 from "../assets/images/panel3.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">
          Wadah perpustakaan kolektif <br />
          dan media literasi daring.
        </h1>

        {/* Info Panel */}
        <div className="row justify-content-center mb-5">
          <div className="col-8 info-panel">
            <div className="row">
              <div className="col-sm">
                <img
                  src={panel1}
                  alt="Employee"
                  className="img-fluid float-left"
                />
                <h4>400 Buku</h4>
              </div>
              <div className="col-lg">
                <img
                  src={panel2}
                  alt="HiRes"
                  className="img-fluid float-left"
                />
                <h4>50 Anggota</h4>
              </div>
              <div className="col-lg">
                <img
                  src={panel3}
                  alt="Security"
                  className="img-fluid float-left"
                />
                <h4>5 Dropping Point</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Info Panel END */}

        <a href="#" className="btn btn-info btn-lg tombol">
          Pinjam Buku
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
