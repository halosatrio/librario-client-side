import React from "react";
import IconText from "./iconText";
import Button from "components/common/Button";

const Footer = () => {
  return (
    <footer>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-4 col-lg-3 mb-4 text-center text-md-left">
            <IconText />
            <p className="brand-tagline">
              Wadah perpustakaan kolektif dan media literasi daring.
            </p>
          </div>
          <div className="col-sm-7 col-md-3 offset-md-1 col-lg-3 offset-lg-2 mb-4 text-center text-sm-left">
            <h6 className="mt-2">Perpustakaan Kolektif</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Daftar Anggota
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/catalogue">
                  Katalog Buku
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/user-guide">
                  User Guide
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3 offset-lg-1 text-center text-sm-left">
            <h6 className="mt-2">Hubungi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@librario.com"
                >
                  support@librario.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Spasso cafe, Jl Pandega Marta, Mlati, Sleman</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col text-center copyrights">
            &copy; copyright 2020 | built with <span>love</span> by{" "}
            <Button isExternal type="link" href="https://instagram.com/strbyj">
              Satrio Bayu Aji
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
