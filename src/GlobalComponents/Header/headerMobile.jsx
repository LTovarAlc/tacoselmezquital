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
        src="../../../img/tacosLogo.png"
        alt="Tacos El Mezquital"
        className="logo__headerMobile"
      />
      <nav className="navBar__Mobile">
        <ul className={`menu__mobile ${isMenuOpen ? "show" : ""}`}>
          <li className="menuMobile__list-items">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className="menuMobile__list-items">
            <Link to={"/error"}>Sucursales</Link>
          </li>
          <li className="menuMobile__list-items">
            <Link to={"/error"}>Contactos</Link>
          </li>
          <li className="menuMobile__list-items">
            <Link to={"/error"}>Nosotros</Link>
          </li>
          <li className="menuMobile__list-items">
            <Link to={"/menu"}>Menú</Link>
          </li>
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
