import React from "react";

import { SvgPath } from "../SvgPath";
import "./Switcher1btn.scss";

export const Switcher1btn = ({ setPressCombine }) => {
  return (
    <div className="sw1btn">
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
        <span>
          <SvgPath
            box={"24"}
            size={"30px"}
            cl="round"
            col={"#65000b"}
            path={"круг"}
          />
          <SvgPath
            box={"32"}
            size={"30px"}
            cl="cross"
            col={"#65000b"}
            path={"крест"}
          />
        </span>
      </label>
    </div>
  );
};
// export { Switcher1btn };
