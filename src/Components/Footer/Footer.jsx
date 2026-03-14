import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = ({ baseUrl }) => {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <Link className="logo__link" to="/">
            <svg className="logo">
              <use href={`${baseUrl}/icons.svg#logo`}></use>
            </svg>
          </Link>
          <div className="footer-about__box">
            <h6 className="footer__title">About Us</h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Who we are
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Copyright (DMCA)
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Terms of Service
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contacts__box">
            <h6 className="footer__title">Contact Us</h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Support Center
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Advertising
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Join Our Team
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Contact Email
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Feedback Form
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-features__box">
            <h6 className="footer__title">Discovery & Features</h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Request a Movie
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Release Calendar
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Surprise Me!
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  Top Rated
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer-item__link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="powered-by__box">
          <p className="powered-by__text">Powered By: MilX Corporation</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
