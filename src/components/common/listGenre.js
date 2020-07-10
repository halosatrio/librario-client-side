import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class ListGenre extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleAccordion() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? "collapse" : "collapse show";
    const classTwo = collapsed
      ? "btn btn-block text-left collapsed"
      : "btn btn-block text-left";

    const { items, text, value, onItemSelect, selectedItem } = this.props;

    return (
      <Fade>
        <div
          className="accordion d-block d-md-none col-md-3 col-lg-2 mb-4"
          id="accordionGenre"
        >
          <div className="card bordered">
            <div className="card-header" id="headingOne">
              <button
                onClick={this.toggleAccordion}
                className={`h2 mb-0 ${classTwo}`}
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Pilih Genre Buku
              </button>
            </div>

            <div
              id="collapseOne"
              className={classOne}
              aria-labelledby="headingOne"
              data-parent="#accordionGenre"
            >
              <ul className="list-group" style={{ borderRadius: 0 }}>
                {items.map((item) => (
                  <li
                    key={item[value]}
                    className={
                      item === selectedItem
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    style={{ borderWidth: "1px 0 0 0" }}
                    onClick={() => onItemSelect(item)}
                  >
                    {item[text]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-md-3 col-lg-2 mb-5">
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
      </Fade>
    );
  }
}

ListGenre.defaultProps = {
  text: "name",
  value: "_id",
};

export default ListGenre;
