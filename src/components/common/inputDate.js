import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import iconCalendar from "../../assets/images/icon-calendar.svg";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const InputDate = (props) => {
  return (
    <div className="input-date mb-3">
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={iconCalendar} alt="icon calendar" />
          </span>
        </div>
        <DatePicker
          dateFormat="dd MMM, yyyy"
          selected={props.startDate}
          onChange={(date) => props.setDate(date)}
          minDate={new Date()}
          className="form-control"
          id={props.name}
        />
      </div>
    </div>
  );
};

export default InputDate;
