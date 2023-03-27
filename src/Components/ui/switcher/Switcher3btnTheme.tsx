import React, { useState, useLayoutEffect } from "react";

// хук для Цветовых Тем (Тёмная/Сетлая/Средняя)
import { useTheme } from "../../../scripts/hooks/useTheme";

import "./Switcher3btnTheme.scss";

export const Switcher3btnTheme = () => {
  // ЛОГИКА отрисовки checkbox в checked по body.data-theme
  const [checkedBox, setCheckedBox] = useState("");
  const handleChange = (nm: string) => {
    setCheckedBox(nm);
  };
  useLayoutEffect(() => {
    const dataTheme = document.body.getAttribute("data-theme");
    if (dataTheme === "dark") {
      setCheckedBox("dark");
    }
    if (dataTheme === "light") {
      setCheckedBox("light");
    }
    if (dataTheme === "natural") {
      setCheckedBox("natural");
    }
  }, []);

  // ЛОГИКА переключателя Цветовых Тем (dark/light/natural)
  // стат./fn Цветовых Тем (Тёмная/Сетлая/Средняя)
  const { theme, setTheme } = useTheme();
  const handleDarkTheme = () => {
    setTheme("dark");
  };
  const handleLightTheme = () => {
    setTheme("light");
  };
  const handleNaturalTheme = () => {
    setTheme("natural");
  };
  // saveCheckedToLocalStorage();
  return (
    <div className="sw3btn">
      <label className="sw3btn-label sw3btn__dark" htmlFor="_dark">
        o
      </label>
      <input
        id="_dark"
        className="sw3btn-input sw3btn-radio__dark"
        type="radio"
        name="--theme"
        value="_dark"
        onClick={() => handleDarkTheme()}
        checked={checkedBox === "dark" ? true : false}
        onChange={() => {
          handleChange("dark");
        }}
      />
      <label className="sw3btn-label sw3btn__neutral" htmlFor="_neutral">
        ~
      </label>
      <input
        id="_neutral"
        className="sw3btn-input sw3btn-radio__neutral"
        type="radio"
        name="--theme"
        value="_neutral"
        onClick={() => handleNaturalTheme()}
        checked={checkedBox === "natural" ? true : false}
        onChange={() => {
          handleChange("natural");
        }}
      />
      <label className="sw3btn-label sw3btn__light" htmlFor="_light">
        +
      </label>
      <input
        id="_light"
        className="sw3btn-input sw3btn-radio__light"
        type="radio"
        name="--theme"
        value="_light"
        onClick={() => handleLightTheme()}
        checked={checkedBox === "light" ? true : false}
        onChange={() => {
          handleChange("light");
        }}
      />
      <div className="sw3btn-slider"></div>
    </div>
  );
};
// export { Switcher3btnTheme };
