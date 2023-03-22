import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// хук для вывода Доп.Меню ч/з Опред.Кобин.Клвш.
import { useAllKeysPress } from "../../scripts/hooks/useAllKeysPress";

// хук для Цветовых Тем (Тёмная/Сетлая/Средняя)
import { useTheme } from "../../scripts/hooks/useTheme";
// переключатель для тем
import { Switcher3btnTheme } from "../ui/switcher/Switcher3btnTheme";

// хук для Размеров (Тёмная/Сетлая/Средняя)
import { useSize } from "../../scripts/hooks/useSize";
// переключатель для размеров
import { Switcher4btn } from "../ui/switcher/Switcher4btn";

export function Header() {
  // ЛОГИКА Опред.Комбин.Клвш. для вывода Доп.Меню // ^ нов.версия
  const saved = localStorage.getItem("--dopMenu");
  const [pressCombine, setPressCombine] = useState(
    saved ? JSON.parse(saved) : ""
  );
  // массив букв после хука (возвращ true е/и переданные и нажатые равны)
  const combinePress = useAllKeysPress({
    userKeys: ["d", "o", "p", "m", "n"],
    order: true,
  });
  // отслеж. измен.с записью в LS
  useEffect(() => {
    if ((combinePress || pressCombine) === true) {
      setPressCombine(true);
      localStorage.setItem("--dopMenu", JSON.stringify(true));
    } else if ((combinePress || pressCombine) === false) {
      setPressCombine(false);
      localStorage.setItem("--dopMenu", JSON.stringify(false));
    }
  }, [combinePress, pressCombine]);

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

  // ЛОГИКА переключателя Цветовых Тем (dark/light/natural)
  // стат./fn Цветовых Тем (Тёмная/Сетлая/Средняя)
  const { size, setSize } = useSize();
  const handleBigSize = () => {
    setSize("big");
  };
  const handleMidSize = () => {
    setSize("mid");
  };
  const handleSmallSize = () => {
    setSize("small");
  };
  const handleOffSize = () => {
    setSize("off");
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* ЛОГО */}
          <div className="header__logo">
            <Link to="/" className="header__link">
              <img
                className="header__img"
                // src={require("../../img/logo/ЕжеСветRedBlackWhiteEff.png")}
                src={require("../../img/logo/SuhoEd_mini.png")}
                alt=""
              />
              <h3>СухоЕд</h3>
            </Link>
          </div>
          {/* ОБЩ. МЕНЮ */}
          <div className="header__menu">
            {/* ВЕРХНЕЕ МЕНЮ */}
            <nav className="header__menu-top menu-top flex flex-wrap justify-between items-center text-white">
              {/* NewPro */}
              <span className="menu-top__items m-t-items">
                <NavLink to="/NewPro" className="m-t-items__navlink activ-prob">
                  NewPro
                </NavLink>
              </span>
              {/* Prob0 */}
              <span className="menu-top__items m-t-items">
                <NavLink to="/Prob0" className="m-t-items__navlink activ-prob">
                  Prob0
                </NavLink>
                {/* // ^ данная вложеность и переход на стр. возможен е/и сами влож.стр. добав. в общ. Routes, на один уровень с верхним NavLink */}
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
              {/* AboutMe */}
              <span className="menu-top__items m-t-items">
                <NavLink to="AboutMe" className="m-t-items__navlink">
                  AboutMe
                </NavLink>
              </span>
            </nav>
            {/* НИЖНЕЕ/ДОП.МЕНЮ */}
            {pressCombine && (
              <nav className="header__menu-bottom menu-bottom flex flex-wrap justify-between items-center mt-4">
                <span
                  onClick={() => {
                    setPressCombine(false);
                  }}
                  className="menu-bottom__items m-b-items"
                >
                  <a className="m-b-items__navlink" href="#!">
                    1
                  </a>
                </span>
                <span className="menu-bottom__items m-b-items">
                  <a className="m-b-items__navlink" href="/package.json#">
                    2
                  </a>
                </span>
                <span className="menu-bottom__items m-b-items">
                  <Switcher4btn
                    handleBigSize={handleBigSize}
                    handleMidSize={handleMidSize}
                    handleSmallSize={handleSmallSize}
                    handleOffSize={handleOffSize}
                  />
                </span>
                <span className="menu-bottom__items m-b-items">
                  <Switcher3btnTheme
                    handleDarkTheme={handleDarkTheme}
                    handleLightTheme={handleLightTheme}
                    handleNaturalTheme={handleNaturalTheme}
                  />
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
