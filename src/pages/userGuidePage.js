import React, { Component } from "react";

import NavBar from "components/navBar";
import Footer from "components/footer";
import UserGuide from "components/userGuide";
import Breadcrumb from "components/breadcrumb";
import TitleText from "components/common/titleText";

class UserGuidePage extends Component {
  componentDidMount() {
    window.title = "Librario | User Guide";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "User Guide", pageHref: "" },
    ];

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <TitleText isBold className="px-4">
          {`User Guide  `}
          <span className="font-weight-normal">|</span>
          {`  Rule of the Game`}
        </TitleText>
        <UserGuide />
        <Footer />
      </>
    );
  }
}

export default UserGuidePage;
