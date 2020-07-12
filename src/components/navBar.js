import React, { Component } from "react";

import IcontText from "./iconText";
import Button from "./common/button";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? " active" : "";
  };

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    if (this.props.isCentered) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <IcontText className="mx-auto" />
          </div>
        </nav>
      );
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <IcontText />
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${this.getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${this.getNavLinkClass("/catalogue")}`}>
                <Button className="nav-link" type="link" href="/catalogue">
                  Catalogue
                </Button>
              </li>
              <li className={`nav-item${this.getNavLinkClass("/user-guide")}`}>
                <Button className="nav-link" type="link" href="/user-guide">
                  User Guide
                </Button>
              </li>
              <li className={`nav-item${this.getNavLinkClass("/login")}`}>
                <Button className="nav-link" type="link" href="/login">
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
