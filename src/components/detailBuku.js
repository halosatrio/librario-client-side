import React from "react";

import Button from "./common/button";
import InputDate from "./common/inputDate";

const DetailBuku = ({ data }) => {
  return (
    <section className="main">
      <div className="container mb-5">
        <div className="row justify-content-around">
          {/* FEATURED IMAGE */}
          <div className="col-10 col-md-6 col-lg-6 col-xl-5 mb-4">
            <figure>
              <img src={data.imageUrl} className="img-fluid" alt={data.Judul} />
              <figcaption className="figure-caption">Cover depan</figcaption>
            </figure>
          </div>
          {/* FEATURED IMAGE END */}

          <div className="deskripsi-buku col-11 col-md-6 col-lg-6 col-xl-5">
            <h3 className="mb-4 text-gray-800">Detail Buku</h3>

            {/* TABEL DETAIL BUKU */}
            <table className="table">
              <tbody>
                <tr>
                  <th>Judul</th>
                  <td>{data.Judul}</td>
                </tr>
                <tr>
                  <th>Penulis</th>
                  <td>{data.Penulis}</td>
                </tr>
                <tr>
                  <th>Penerbit</th>
                  <td>{data.Penerbit}</td>
                </tr>
                <tr>
                  <th>Genre</th>
                  <td>{data.Genre}</td>
                </tr>
                <tr>
                  <th>ISBN</th>
                  <td>{data._id}</td>
                </tr>
                <tr>
                  <th>Kondisi</th>
                  <td>{data.Kondisi}</td>
                </tr>
              </tbody>
            </table>
            {/* TABEL DETAIL BUKU END */}

            {/* PINJAM BUKU */}
            <div className="card bordered" style={{ padding: "30px 30px" }}>
              <h4 className="mb-4">Pinjam Sekarang</h4>
              <label htmlFor="date">Pilih tanggal</label>
              <InputDate name="date" />
              <h6 className="text-gray-600 font-weight-light mb-3">
                Buku{" "}
                <span
                  className={`mt-3 badge font-weight-normal ${
                    data.Ketersediaan === "Tersedia"
                      ? "badge-info"
                      : "badge-danger"
                  }`}
                  style={{ fontSize: 14 }}
                >
                  {data.Ketersediaan}
                </span>{" "}
              </h6>
              <h6 className="text-gray-600 font-weight-light mb-4">
                Droppping Point: Spasso Cafe
              </h6>
              <Button href="/checkout" type="link" className="btn btn-primary">
                Pinjam Buku
              </Button>
            </div>
            {/* PINJAM BUKU END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailBuku;
