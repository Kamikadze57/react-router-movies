import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ baseUrl }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <header>
        <div className="container header__container">
          <Link className="logo__link" to="/">
            <svg className="header__logo">
              <use href={`${baseUrl}/icons.svg#logo`}></use>
            </svg>
          </Link>
          <nav className="header__nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <NavLink className="header-nav__link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="header-nav__item">
                <NavLink className="header-nav__link" to="/movies">
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-btn__box">
            <button className="theme__btn button" onClick={toggleTheme}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            <button className="header__btn button">Sign in</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
