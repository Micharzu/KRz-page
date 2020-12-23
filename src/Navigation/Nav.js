import React, { useEffect, useRef } from "react";
import "./nav-styles/Nav.css";

import { NavLink } from "react-router-dom";

function Nav() {
  const navbarRef = useRef();
  const burgerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      navbarRef.current.classList.toggle("scrolled", window.scrollY > 0);
    });
  });
  const toggleBurger = () => {
    navbarRef.current.classList.toggle("burger-opened");
    burgerRef.current.classList.toggle("opened");

    if (!navbarRef.current.classList.contains("burger-opened")) {
      navbarRef.current.classList.add("closing-burger");
      setTimeout(() => {
        navbarRef.current.classList.remove("closing-burger");
      }, 700);
    }
  };
  return (
    <div className="navbar" ref={navbarRef}>
      <div className="nav-items">
        <ul className="nav-links">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>Główna</li>
          </NavLink>
          <NavLink
            to="/aktualnosci"
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>Aktualności</li>
          </NavLink>
          <NavLink
            to="/zespol-zak"
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>Zespół Żak</li>
          </NavLink>
          <NavLink
            to="/galeria"
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>Galeria</li>
          </NavLink>
          <NavLink
            to="/multimedia"
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>Multimedia</li>
          </NavLink>
          <NavLink
            to="/nuty"
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>Nuty</li>
          </NavLink>
          <NavLink
            to="/rodzinne-studio-zak"
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>RSŻ</li>
          </NavLink>
          <NavLink
            to="/kontakt"
            className="nav-link"
            activeClassName="is-active"
            onClick={toggleBurger}
          >
            <li>Kontakt</li>
          </NavLink>
        </ul>
        <div className="nav-burger">
          <div className="burger" ref={burgerRef} onClick={toggleBurger}>
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
