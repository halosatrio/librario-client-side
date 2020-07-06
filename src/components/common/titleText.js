import React from "react";
import propTypes from "prop-types";

const TitleText = (props) => {
  const className = [props.className];
  if (props.isBold) className.push("font-weight-bold");

  return (
    <div className="container text-center">
      <h1 className={className.join(" ")} style={{ marginBottom: 60 }}>
        {props.children}
      </h1>
    </div>
  );
};

TitleText.propTypes = {
  className: propTypes.string,
  isBold: propTypes.bool,
};

export default TitleText;
