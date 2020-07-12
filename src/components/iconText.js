import React from "react";

import Button from "./common/button";

const IconText = (props) => {
  const className = ["brand-text-icon", props.className];

  return (
    <Button className={className.join(" ")} href="" type="link">
      Librario
    </Button>
  );
};

export default IconText;
