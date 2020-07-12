import React from "react";

import Button from "components/common/button";

const Breadcrumb = (props) => {
  return (
    <div className="container my-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent">
          {props.data.map((item, index) => {
            return (
              <li
                key={`breadcrumb-${index}`}
                className={`breadcrumb-item${
                  index === props.data.length - 1 ? " active" : ""
                }`}
              >
                {index === props.data.length - 1 ? (
                  item.pageTitle
                ) : (
                  <Button type="link" href={item.pageHref}>
                    {item.pageTitle}
                  </Button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
