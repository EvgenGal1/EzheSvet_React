import React /* , { useState, useEffect } */ from "react";

import "./Switcher2btn.scss";

export const Switcher2btn = () => {
  // // ЛОГИКА отрисовки checkbox в checked по body.data-size
  // const [checkedBox, setCheckedBox] = useState("");
  // const [theme, setTheme] = useState(localStorage.getItem("--theme") || "");
  // const handleChange = (nm: string) => {
  //   setCheckedBox(nm);
  // };
  // useEffect(() => {
  //   const dataTheme = document.body.getAttribute("data-size");
  //   if (dataTheme === "big") {
  //     setCheckedBox("big");
  //   }
  //   if (dataTheme === "mid") {
  //     setCheckedBox("mid");
  //   }
  //   if (dataTheme === "small") {
  //     setCheckedBox("small");
  //   }
  //   if (dataTheme === "off") {
  //     setCheckedBox("off");
  //   }
  // }, [checkedBox]);

  return (
    <div className="sw2blwh">
      <input type="checkbox" id="sw-2" />
      <label htmlFor="sw-2"></label>
    </div>
  );
};
// export { Switcher2btn };
