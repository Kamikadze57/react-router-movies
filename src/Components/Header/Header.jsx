import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ baseUrl }) => {
  return (
    <>
      <header>
        <div className="container header__container">
          <Link className="logo__link" to="/">
            <svg className="logo">
              <use href={`${baseUrl}/icons.svg#logo`}></use>
            </svg>
          </Link>
          <nav className="header__nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <Link className="header-nav__link" to="/">
                  Home
                </Link>
              </li>
              <li className="header-nav__item">
                <Link className="header-nav__link" to="/movies">
                  Movies
                </Link>
              </li>
            </ul>
          </nav>
          <button className="theme__btn">Dark</button>
          <button className="header__btn button">Sign in</button>
        </div>
      </header>
    </>
  );
};

export default Header;
