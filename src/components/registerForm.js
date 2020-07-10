import React from "react";
import Fade from "react-reveal/Fade";

import InputText from "./common/inputText";
import InputFile from "./common/inputFile";
import Button from "./common/button";

import items from "json/paymentItems.json";

const RegisterForm = (props) => {
  const { data } = props;

  return (
    <>
      <div className="container" style={{ margin: "70px auto 50px auto" }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <Fade>
              <h5 className="font-weight-light mb-3 text-gray-500 text-center text-md-left px-5">
                Biaya Deposit Pendaftaran:
              </h5>
              <h4 className="font-weight-light mb-4 text-center text-md-left px-5">
                Rp50.000
              </h4>
              {items.map((item, index) => {
                return (
                  <div key={index} className="row justify-content-center mb-2">
                    <div className="col text-right">
                      <img src={item.logo} alt={item.nama} height="35" />
                    </div>
                    <div className="col">
                      <dl>
                        <dd>{item.rekening}</dd>
                        <dd>{item.atasNama}</dd>
                      </dl>
                    </div>
                  </div>
                );
              })}
              <div className="row">
                <p
                  className="text-gray-500 text-center text-md-left px-5"
                  style={{ marginBottom: 60 }}
                >
                  ketentuan mengenai uang deposito dapat dibaca{" "}
                  <a href="/user-guide">di sini</a>
                </p>
              </div>
            </Fade>
          </div>
          <div className="d-none d-lg-block col-1"></div>
          <div className="col-10 col-sm-8 col-md-6 col-lg-5">
            <Fade delay={300}>
              <h4 className="font-weight-light mb-4">Daftar Anggota</h4>
              <label htmlFor="name">Nama Lengkap</label>
              <InputText
                id="name"
                name="name"
                type="name"
                value={data.name}
                onChange={props.onChange}
              />
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />
              <label htmlFor="password">Password</label>
              <InputText
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={props.onChange}
              />
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <Button
                type="link"
                className="btn py-2 mt-4"
                href="/"
                isBlock
                isPrimary
                style={{ width: 200 }}
              >
                Daftar
              </Button>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
