import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (

    <nav className="nav">
      <NavLink to="/home">
        <div className="nav__logo">
          <img src="logo.png" alt="Logo" />
        </div>
      </NavLink>
      <NavLink to="/home">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Nav;