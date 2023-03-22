import React from "react";
import "./Switcher4btn.scss";

export const Switcher4btn = ({
  handleBigSize,
  handleMidSize,
  handleSmallSize,
  handleOffSize,
}) => {
  return (
    <div className="sw4btn">
      <input
        className="sw4btn-input sw4-inp__big"
        type="radio"
        id="_big"
        name="--size"
        value="_big"
        onClick={() => handleBigSize()}
      />
      <input
        className="sw4btn-input sw4-inp__mid"
        type="radio"
        id="_mid"
        name="--size"
        value="_mid"
        checked
        onClick={() => handleMidSize()}
      />
      <input
        className="sw4btn-input sw4-inp__small"
        type="radio"
        id="_small"
        name="--size"
        value="_small"
        onClick={() => handleSmallSize()}
      />
      <input
        className="sw4btn-input sw4-inp__off"
        type="radio"
        id="_off"
        name="--size"
        value="_off"
        onClick={() => handleOffSize()}
      />
      {/* <label className="sw3btn-label sw3btn__light" htmlFor="_light">
        +
      </label>
      <input
        id="_light"
        className="sw3btn-radio__light"
        type="radio"
        name="--theme"
        value="_light"
        onClick={() => handleLightTheme()}
      /> */}
      <i></i>
      <label className="sw4btn-label sw4-lab__big" htmlFor="_big">
        o
      </label>
      <label className="sw4btn-label sw4-lab__mid" htmlFor="_mid">
        ~
      </label>
      <label className="sw4btn-label sw4-lab__small" htmlFor="_small">
        +
      </label>
      <label className="sw4btn-label sw4-lab__off" htmlFor="_off">
        #
      </label>
    </div>
  );
};
// export { Switcher4btn };
