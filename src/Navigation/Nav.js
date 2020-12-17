import React, { useEffect, useRef } from "react";
import "./nav-styles/Nav.css";

import { Link, NavLink } from "react-router-dom";

function Nav() {
  const navbarRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      navbarRef.current.classList.toggle("scrolled", window.scrollY > 0);
    });
  });
  return (
    <div className="navbar" ref={navbarRef}>
      <div className="nav-items">
        <ul className="nav-links">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="is-active"
          >
            <li>Główna</li>
          </NavLink>
          <NavLink
            to="/aktualnosci"
            className="nav-link"
            activeClassName="is-active"
          >
            <li>Aktualności</li>
          </NavLink>
          <NavLink
            to="/zespol-zak"
            className="nav-link"
            activeClassName="is-active"
          >
            <li>Zespół Żak</li>
          </NavLink>
          <NavLink
            to="/galeria"
            className="nav-link"
            activeClassName="is-active"
          >
            <li>Galeria</li>
          </NavLink>
          <NavLink
            to="/multimedia"
            className="nav-link"
            activeClassName="is-active"
          >
            <li>Multimedia</li>
          </NavLink>
          <NavLink to="/nuty" className="nav-link" activeClassName="is-active">
            <li>Nuty</li>
          </NavLink>
          <NavLink
            to="/rodzinne-studio-zak"
            className="nav-link"
            activeClassName="is-active"
          >
            <li>RSŻ</li>
          </NavLink>
          <NavLink
            to="/kontakt"
            className="nav-link"
            activeClassName="is-active"
          >
            <li>Kontakt</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
