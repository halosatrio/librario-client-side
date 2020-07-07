import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

const TitleText = (props) => {
  const className = [props.className];
  if (props.isBold) className.push("font-weight-bold");

  return (
    <Fade bottom>
      <div className="container text-center">
        <h1 className={className.join(" ")} style={{ marginBottom: 60 }}>
          {props.children}
        </h1>
      </div>
    </Fade>
  );
};

TitleText.propTypes = {
  className: propTypes.string,
  isBold: propTypes.bool,
};

export default TitleText;
