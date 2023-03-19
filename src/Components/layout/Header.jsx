import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// вывод Доп.Меню ч/з опред.клвш. от хук AllKey
import { useAllKeysPress } from "../../hooks/useAllKeysPress";

export function Header() {
  // стат. нажатия комбинации клавиш
  const [pressCombine, setPressCombine] = useState(false);
  // массив букв после хука (возвращ true е/и переданные и нажатые равны)
  const combinePress = useAllKeysPress({
    userKeys: ["d", "o", "p", "m", "n"],
    order: true,
  });

  useEffect(() => {
    if (combinePress === true) {
      setPressCombine(true);
    }
    console.log("combinePress : " + combinePress);
  }, [combinePress, pressCombine]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header__logo">
            <Link to="/" className="header__link">
              <img
                className="header__img"
                src={require("../../img/vr/logo/ЕжеСветRedBlackWhiteEff.png")}
                alt=""
              />
              <h3>НОВ.ПРОЕКТ</h3>
            </Link>
          </div>
          <div className="header__menu">
            {/* MENU_TOP */}
            <nav className="header__menu-top menu-top flex flex-wrap justify-between items-center text-white">
              {/* NewPro */}
              <span className="menu-top__items m-t-items">
                <NavLink to="/NewPro" className="m-t-items__navlink activ-prob">
                  NewPro
                </NavLink>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink to="/Prob0" className="m-t-items__navlink activ-prob">
                  Prob0
                </NavLink>
                {/* // ^ данная вложеность и переход на стр. возможен е/и сами влож.стр. добав. в общ. Routes, на один уровень с верхним NavLink родителя */}
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/Prob1" className="">
                      Prob1
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/Prob2" className="">
                      Prob2
                    </Link>
                  </li>
                </ul>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink to="AboutMe" className="m-t-items__navlink">
                  AboutMe
                </NavLink>
              </span>
            </nav>
            {/* MENU_BOTTOM */}
            {pressCombine && (
              <nav className="header__menu-bottom menu-bottom">
                <span
                  onClick={() => {
                    setPressCombine(false);
                  }}
                  className="menu-bottom__items m-b-items"
                >
                  <a className="m-b-items__navlink" href="/#">
                    1
                  </a>
                </span>
                <span className="menu-bottom__items m-b-items">
                  <a className="m-b-items__navlink" href="/package.json#">
                    2
                  </a>
                </span>
                <span className="menu-bottom__items m-b-items">
                  <a className="m-b-items__navlink" href="/#">
                    3
                  </a>
                </span>
                {/* <MultiKeysPressed
                  keys={["Alt", "a"]}
                  // keys={["Alt", "Control", "Shift"]}
                  // keys={["Shift", "x", "z"]}
                  // keys={["q", "w", "e"]}
                  keysPressed={keysPressed}
                  emoji="WIN"
                /> */}
              </nav>
            )}
            {/* {pressKeyL && pressKeyJ && pressKeyG && ( */}
          </div>
        </div>
      </header>
    </>
  );
}
// export { Header };
