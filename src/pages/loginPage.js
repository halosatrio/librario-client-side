import React, { Component } from "react";

import NavBar from "components/navBar";
import LoginForm from "components/loginForm";

class LoginPage extends Component {
  state = {
    data: {
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
        <LoginForm data={data} onChange={this.onChange} />
      </>
    );
  }
}

export default LoginPage;
