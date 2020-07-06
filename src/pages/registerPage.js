import React, { Component } from "react";

import NavBar from "components/navBar";
import RegisterForm from "components/registerForm";

class RegisterPage extends Component {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <NavBar isCentered />
        <RegisterForm data={data} onChange={this.onChange} />
      </>
    );
  }
}

export default RegisterPage;
