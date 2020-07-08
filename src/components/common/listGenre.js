import React from "react";

const ListGenre = (props) => {
  const { items, text, value, onItemSelect, selectedItem } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[value]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[text]}
        </li>
      ))}
    </ul>
  );
};

ListGenre.defaultProps = {
  text: "name",
  value: "_id",
};

export default ListGenre;
