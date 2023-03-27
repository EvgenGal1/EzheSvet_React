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
        {/* &#215; */}
        <span className="sw1btn__span"></span>
        {/* <img
          className="sw1btn__img"
          // src={require("../../img/logo/ЕжеСветRedBlackWhiteEff.png")}
          // src={require("../../../img/miniElem/cross.png")}
          // src={require("../../../img/miniElem/plus.png")}
          src={require("../../../img/miniElem/circle5.png")}
          alt=""
        /> */}
      </label>
    </div>
  );
};
// export { Switcher1btn };
