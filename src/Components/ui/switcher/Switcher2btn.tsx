import React, { useState, useLayoutEffect } from "react";

import "./Switcher2btn.scss";

export const Switcher2btn = () => {
  // ЛОГИКА отрисовки checkbox в checked по body.data-size
  const [checkedBox, setCheckedBox] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("--theme") || "");
  const handleChange = (nm: string) => {
    setCheckedBox(nm);
  };
  useLayoutEffect(() => {
    const dataTheme = document.body.getAttribute("data-size");
    if (dataTheme === "big") {
      setCheckedBox("big");
    }
    if (dataTheme === "mid") {
      setCheckedBox("mid");
    }
    if (dataTheme === "small") {
      setCheckedBox("small");
    }
    if (dataTheme === "off") {
      setCheckedBox("off");
    }
  }, []);

  // ЛОГИКА переключателя ...
  // стат./fn ...
  // const { ..., ... } = useSize();
  // const handleBigSize = () => {
  //   setSize("big");
  // };
  // const handleMidSize = () => {
  //   setSize("mid");
  // };
  // const handleSmallSize = () => {
  //   setSize("small");
  // };
  // const handleOffSize = () => {
  //   setSize("off");
  // };

  return (
    <span className="sw2blwh">
      <input type="checkbox" id="sw-2" />
      <label htmlFor="sw-2"></label>
    </span>
  );
};
// export { Switcher2btn };
