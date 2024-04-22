import "./headerMobile.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="headerMobile">
      <img
        src="../../../img/cowbow.png"
        alt="Tacos El Mezquital"
        className="logo__headerMobile"
      />
      <nav className="navBar__Mobile">
        <ul className={`menu__mobile ${isMenuOpen ? "show" : ""}`}>
          <li className="menuMobile__list-item"><a className="menuMobile-links" href="#nosotros">Nosotros</a></li>
          <li className="menuMobile__list-item"><a  className="menuMobile-links"href="#menu">Menú</a></li>
          <li className="menuMobile__list-item"><a  className="menuMobile-links"href="#Sucursales">Sucursales</a></li>
          <li className="menuMobile__list-item"><a className="menuMobile-links" href="#contact">Contactos</a></li>
        </ul>
        <button className="navBar__mobile-btn" onClick={handleMenuClick}>
          <img
            src="../../../../img/flechaAbajo.png" alt="arrow"
            className={`menu__btn-img ${isMenuOpen ? "rotate" : ""}`}
          /> 
        </button>
      </nav>
    </header>
  );
};

export default HeaderMobile;
