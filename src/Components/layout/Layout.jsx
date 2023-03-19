import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useTransition, animated } from "react-spring";

// Глав.Эл.Шаблона
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      // transform: "translateX(100%)",
      transform: "scale(1.5) ",
      // transform: "scale(1.1) translateY(-150px)",
      // transform: "translateY(-150px)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s",
    },
    enter: {
      opacity: 1,
      // transform: "translateX(0%)",
      transform: "scale(1) ",
      // transform: "scale(1) translateY(0%)",
      // transform: "translateY(0%)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s",
    },
    leave: {
      opacity: 0,
      // transform: "translateX(-100%)",
      transform: "scale(0.)",
      // transform: "scale(0.9) translateY(-100px)",
      // transform: "translateY(-150px)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s",
      position: "absolute",
    },
  });

  return (
    <>
      <Header />
      {/* <main
        className="main "
        style={{
          overflow: "hidden",
          padding: "0px 5%",
        }}
      > */}
      {transitions((props, item) => (
        <animated.main style={props}>
          {/* <div
              style={{
                // position: "absolute",
                width: "100%",
              }}
            > */}
          <Outlet location={item} />
          {/* </div> */}
        </animated.main>
      ))}
      {/* </main> */}
      <Footer />
    </>
  );
};
export { Layout };
