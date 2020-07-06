import React from "react";
import Button from "components/common/button";

const UserGuide = () => {
  return (
    <div className="container my-4 user-guide">
      <div className="row justify-content-center">
        <div className="col-10">
          {/* SECTION PEMINJAM BUKU */}
          <h3 className="mb-3 text-gray-800" style={{ marginLeft: -30 }}>
            Peminjam Buku
          </h3>
          <h5>syarat:</h5>
          <p className="text-gray-600">
            {`untuk dapat melakukan peminjaman buku yang terdapat di katalog,
            calon peminjam harus sudah terdaftar sebagai anggota Librario.  `}
          </p>
          <Button
            type="link"
            href="/register"
            className="btn mb-4 font-weight-bold"
            isPrimary
            isSmall
          >
            Daftar Sekarang
          </Button>
          <h5>cara meminjam:</h5>
          <ol>
            <li>
              {`cek ketersediaan buku yang akan dipinjam di  `}
              <Button
                type="link"
                href="/catalogue"
                className="badge badge-primary font-weight-normal"
                style={{ fontSize: 14 }}
              >
                Katalog Buku
              </Button>
            </li>
            <li>
              buat permintaan peminjaman buku melalui form yang tersedia email
              konfirmasi pendaftaran
            </li>
            <li>tunggu konfirmasi dari admin librario melalui WA kami.</li>
            <li>
              mengambil buku di Dropping Point - Spasso Cafe sesuai waktu yang
              telah ditentukan. untuk peminjaman pertama, sekaligus menyerahkan
              uang deposit(cash) sebesar Rp50.000
            </li>
            <li>konfirmasi pengambilan buku melalui WA</li>
            <li>Selamat membaca.</li>
          </ol>
          <h5>ketentuan:</h5>
          <ol>
            <li>
              peminjam dapat meminjam buku maksimal 2 buku dalam satu waktu.
            </li>
            <li>
              peminjam 1 buku maksimal selama 2 pekan (14 hari dihitung dari
              tanggal transaksi peminjaman) dan bisa diperpanjang sebanyak satu
              kali (tambah 2 pekan lagi) dengan melakukan prosedur dengan admin
              kami via WA
            </li>
            <li>
              untuk menjamin keberlangsungan dan ketersediaan buku yang ada di
              katalog Librario, peminjam dimohon menitipkan deposito sebesar
              Rp50.000 (cash) yang dapat diambl kembali setelah peminjaman
              selesai.
            </li>
          </ol>

          {/* SECTION PENGEMBALIAN BUKU */}
          <h3 className="mt-5 mb-3 text-gray-800" style={{ marginLeft: -30 }}>
            Pengembalian Buku
          </h3>
          <h5>cara mengembalikan:</h5>
          <ol>
            <li>
              kembalikan buku ke dropping point - Spasso Cafe sesuai waktu yang
              telah ditentukan.
            </li>
            <li>mengonfirmasi pengembalian via WA</li>
          </ol>
          <h5>ketentuan:</h5>
          <ol>
            <li>
              apabila ditemukan kerusakan minor, peminjam akan dikenakan denda
              sebesar Rp10.000 yang akan dipotong dari uang deposito
            </li>
            <li>
              apabila ditemukan kerusakan mayor atau hilangnya buku pinjaman,
              akan sebesar harga buku tersebut yang dipotong dari uang deposit
            </li>
            <li>
              Keterlambatan pengembalian buku dikenakan denda sebesar
              Rp1.000/hari untuk setiap buku yang juga akan dipotong dari uang
              deposit, dengan batas maksimal keterlambatan selama 14 hari, atau
              Librario akan menganggap buku hilang dan dikenakan denda seperti
              yang tercantum pada poin ketentuan 2.
            </li>
          </ol>
          <h5>jenis-jenis kerusakan:</h5>
          <ol>
            <li className="text-gray-700">
              kerusakan minor adalah kerusakan di bawah ini yang tidak merusak
              substansi buku
              <ol type="a">
                <li>basah dan lembarannya mengeriting</li>
                <li>robek</li>
                <li>terbakar</li>
                <li>berjamur</li>
                <li>terkena noda</li>
                <li>terdapat coretan permanen</li>
                <li>terlipat</li>
                <li>luntur</li>
              </ol>
            </li>
            <li className="text-gray-700">
              kerusakan mayor adalah kerusakan di bawah ini:
              <ol type="a">
                <li>terdapat halaman yang hilang</li>
                <li>
                  kerusakan yang terdapat pada bagian minor yang menyebabkan
                  buku tidak dapat terbaca lagi (lebih dari 20% isi buku)
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
