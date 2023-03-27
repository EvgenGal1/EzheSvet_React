import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// хук для вывода Доп.Меню ч/з Опред.Кобин.Клвш.
import { useAllKeysPress } from "../../scripts/hooks/useAllKeysPress";
// переключатель видимости Доп.Меню
import { Switcher1btn } from "../ui/switcher/Switcher1btn";

// переключатель черно-белый
import { Switcher2btn } from "../ui/switcher/Switcher2btn";
// подсказка по наведению мыши
import { TitleEl } from "../ui/hintTemplates/TitleEl";

// хук для Цветовых Тем (Тёмная/Сетлая/Средняя)
import { useTheme } from "../../scripts/hooks/useTheme";
// переключатель для Цв.Тем
import { Switcher3btnTheme } from "../ui/switcher/Switcher3btnTheme";

// хук для Размеров (Большой, Средний, Маленький,Выключен)
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

  // ЛОГИКА подсказки по наведению мыши
  const [isHovering, setIsHovering] = useState(false);

  // ЛОГИКА переключателя Цветовых Тем (dark/light/natural)
  useTheme();
  // стат./fn Цветовых Тем (Тёмная/Сетлая/Средняя)
  // const { theme, setTheme } = useTheme();
  // const handleDarkTheme = () => {
  //   setTheme("dark");
  // };
  // const handleLightTheme = () => {
  //   setTheme("light");
  // };
  // const handleNaturalTheme = () => {
  //   setTheme("natural");
  // };

  // ЛОГИКА переключателя Размеров (big/mid/small/off)
  useSize();
  // стат./fn Размеров (Большой/Средний/Маленький/Выключен)
  // const { size, setSize } = useSize();
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
              <h1>СухоЕд</h1>
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
                  className="menu-bottom__items m-b-items"
                  onMouseEnter={() => {
                    setIsHovering(!isHovering);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(!isHovering);
                  }}
                >
                  <Switcher1btn setPressCombine={setPressCombine} />
                  {isHovering && <TitleEl text={"откл.Доп.Меню"} />}
                </span>
                <span
                  className="menu-bottom__items m-b-items"
                  onMouseEnter={() => {
                    setIsHovering(!isHovering);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(!isHovering);
                  }}
                >
                  <Switcher2btn />
                  {isHovering && <TitleEl text={"не занят"} />}
                </span>
                {/* переключатель Цветовых Тем (dark/light/natural) */}
                <span
                  className="menu-bottom__items m-b-items"
                  onMouseEnter={() => {
                    setIsHovering(!isHovering);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(!isHovering);
                  }}
                >
                  <Switcher3btnTheme />
                  {isHovering && <TitleEl text={"Цв.Темы"} />}
                </span>
                <span
                  className="menu-bottom__items m-b-items"
                  onMouseEnter={() => {
                    setIsHovering(!isHovering);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(!isHovering);
                  }}
                >
                  <Switcher4btn />
                  {isHovering && <TitleEl text={"Размеры"} />}
                </span>
              </nav>
            )}
          </div>
          {/* врем.кнп.для упрощ.вкл.доп.меню */}
          {!pressCombine && (
            <div
              className="miniArrow"
              onClick={() => {
                setPressCombine(!pressCombine);
              }}
            >
              &lt;
            </div>
          )}
        </div>
      </header>
    </>
  );
}

// export { Header };
