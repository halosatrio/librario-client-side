import React from "react";

const ListGenre = (props) => {
  const { items, text, value, onItemSelect, selectedItem } = props;

  return (
    <div className="col-md-3 col-lg-2 mb-5">
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[value]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[text]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGenre.defaultProps = {
  text: "name",
  value: "_id",
};

export default ListGenre;
