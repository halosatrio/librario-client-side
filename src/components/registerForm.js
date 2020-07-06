import React from "react";
import Fade from "react-reveal/Fade";

import InputText from "./common/inputText";
import InputFile from "./common/inputFile";
import Button from "./common/button";

import heroImg from "assets/images/hero2.jpeg";

const RegisterForm = (props) => {
  const { data } = props;

  return (
    <>
      <div className="jumbotron-form jumbotron-fluid d-block d-md-none">
        <div className="container"></div>
      </div>
      <div className="d-block d-md-none container px-5">
        <Fade delay={300}>
          <h4 className="font-weight-light my-5">Daftar Anggota</h4>
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
            type="tel"
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

      <div className="container d-none d-md-block" style={{ marginTop: 100 }}>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-md-6 col-lg-5">
            <Fade>
              <div className="card">
                <figure className="img-wrapper" style={{ maxHeight: 350 }}>
                  <img
                    src={heroImg}
                    alt="Librario Daftar"
                    className="img-fluid"
                  />
                </figure>
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
                type="tel"
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
