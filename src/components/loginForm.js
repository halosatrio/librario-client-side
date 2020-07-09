import React from "react";
import Fade from "react-reveal/Fade";

import InputText from "./common/inputText";
import Button from "./common/button";

import heroImg from "assets/images/hero2.jpeg";

const LoginForm = (props) => {
  const { data } = props;

  return (
    <>
      <div className="jumbotron-form jumbotron-fluid d-block d-md-none" />
      <div className="d-block d-md-none container px-5 my-5">
        <Fade delay={500}>
          <h4 className="font-weight-light mb-5">Login</h4>
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
          <Button
            type="link"
            className="btn py-2 mt-4"
            href="#"
            isBlock
            isPrimary
            style={{ width: 200 }}
          >
            Login
          </Button>
          <p
            className="font-weight-light text-gray-500 text-center my-3"
            style={{ width: 200, fontSize: 13, letterSpacing: 1 }}
          >
            jika belum mendaftar
          </p>
          <Button
            type="link"
            className="btn btn-info py-2"
            href="/register"
            isBlock
            style={{ width: 200 }}
          >
            Daftar Sekarang
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
                    alt="Librario Login"
                    className="img-fluid"
                  />
                </figure>
              </div>
            </Fade>
          </div>
          <div className="d-none d-lg-block col-1"></div>
          <div className="col-10 col-sm-8 col-md-6 col-lg-5">
            <Fade delay={300}>
              <h4 className="font-weight-light mb-4">Login</h4>
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
              <Button
                type="link"
                className="btn py-2 mt-4"
                href="#"
                isBlock
                isPrimary
                style={{ width: 200 }}
              >
                Login
              </Button>
              <p
                className="font-weight-light text-gray-500 text-center my-3"
                style={{ width: 200, fontSize: 13, letterSpacing: 1 }}
              >
                jika belum mendaftar
              </p>
              <Button
                type="link"
                className="btn btn-info py-2"
                href="/register"
                isBlock
                style={{ width: 200 }}
              >
                Daftar Sekarang
              </Button>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
