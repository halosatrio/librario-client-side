import React, { Component } from "react";

import NavBar from "components/navBar";
import Footer from "components/footer";
import UserGuide from "components/userGuide";
import Breadcrumb from "components/breadcrumb";

class UserGuidePage extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "User Guide", pageHref: "" },
    ];

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <UserGuide />
        <Footer />
      </>
    );
  }
}

export default UserGuidePage;
