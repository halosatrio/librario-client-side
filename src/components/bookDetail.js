import React from "react";
import propTypes from "prop-types";

const BookDetail = ({ data }) => {
  return (
    <>
      <h3 className="mb-4 text-gray-800">Detail Buku</h3>
      <table className="table">
        <tbody>
          <tr>
            <th>Judul</th>
            <td>{data.judul}</td>
          </tr>
          <tr>
            <th>Penulis</th>
            <td>{data.penulis}</td>
          </tr>
          <tr>
            <th>Penerbit</th>
            <td>{data.penerbit}</td>
          </tr>
          <tr>
            <th>Genre</th>
            <td>{data.genre}</td>
          </tr>
          <tr>
            <th>ISBN</th>
            <td>{data.isbn}</td>
          </tr>
          <tr>
            <th>Kondisi</th>
            <td>{data.kondisi}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

BookDetail.propTypes = {
  data: propTypes.object.isRequired,
};

export default BookDetail;
