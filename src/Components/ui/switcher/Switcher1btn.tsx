import React from "react";
import "./Switcher1btn.scss";

export const Switcher1btn = ({ setPressCombine }) => {
  return (
    <div
      className="sw1btn"
      // onClick={() => {
      //   setPressCombine(false);
      // }}
    >
      <input
        onClick={() => {
          setPressCombine(false);
        }}
        id="show"
        className="sw1btn-radio"
        type="checkbox"
        name="sw1btn"
        value="show"
      />
      <label className="sw1btn-label" htmlFor="show">
        &#215;
      </label>
    </div>
  );
};
// export { Switcher1btn };
