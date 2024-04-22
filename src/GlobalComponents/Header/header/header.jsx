import React from "react";
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      {/* <img
        src="../../../img/tacosLogo.png"
        alt="Tacos el mezquital LOGO"
        className="logo-header"
      /> */}
      <nav className="navBar">
        <ul className="navbar-list">
          <li className="menu-list__item">
            <a className="menu-list__item-link" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li className="menu-list__item">
            <a className="menu-list__item-link" href="#menu">
              Menú
            </a>
          </li>
          <li className="menu-list__item">
            <a className="menu-list__item-link" href="#Sucursales">
              Sucursales
            </a>
          </li>
          <li className="menu-list__item">
            <a className="menu-list__item-link" href="#contact">
              Contactos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
