import { useState, useLayoutEffect } from "react";

export const useSize = () => {
  // сост Темы из LocStr или из Сист.Настр
  const [size, setSize] = useState(localStorage.getItem("--size") || ""); // big, mid, small, off
  // console.log("LocStr ", size);

  useLayoutEffect(() => {
    document.body.setAttribute("data-size", size);
    localStorage.setItem("--size", size);
    window.dispatchEvent(new Event("storage"));
  }, [size]);

  return { size, setSize };
};
