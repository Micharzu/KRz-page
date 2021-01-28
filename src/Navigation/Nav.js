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
    //open
    if (!navbarRef.current.classList.contains("burger-opened")) {
      burgerRef.current.classList.add("opened");
      navbarRef.current.classList.add("burger-opened");
    }
    //close
    else {
      closeBurger();
    }
  };

  const closeBurger = () => {
    burgerRef.current.classList.remove("opened");
    navbarRef.current.classList.remove("burger-opened");
    navbarRef.current.classList.add("closing-burger");
    setTimeout(() => {
      navbarRef.current.classList.remove("closing-burger");
    }, 700);
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
            onClick={closeBurger}
          >
            <li>Główna</li>
          </NavLink>
          {/* <NavLink
            to="/aktualnosci"
            className="nav-link"
            activeClassName="is-active"
            onClick={closeBurger}
          >
            <li>Aktualności</li>
          </NavLink> */}
          <NavLink
            to="/zespol-zak"
            className="nav-link"
            activeClassName="is-active"
            onClick={closeBurger}
          >
            <li>Zespół Żak</li>
          </NavLink>
          <NavLink
            to="/galeria"
            className="nav-link"
            activeClassName="is-active"
            onClick={closeBurger}
          >
            <li>Galeria</li>
          </NavLink>
          {/* <NavLink
            to="/multimedia"
            className="nav-link"
            activeClassName="is-active"
            onClick={closeBurger}
          >
            <li>Multimedia</li>
          </NavLink> */}
          <NavLink
            to="/nuty"
            className="nav-link"
            activeClassName="is-active"
            onClick={closeBurger}
          >
            <li>Nuty</li>
          </NavLink>
          <NavLink
            to="/rodzinne-studio-zak"
            className="nav-link"
            activeClassName="is-active"
            onClick={closeBurger}
          >
            <li>RSŻ</li>
          </NavLink>
          {/* <NavLink
            to="/kontakt"
            className="nav-link"
            activeClassName="is-active"
            onClick={closeBurger}
          >
            <li>Kontakt</li>
          </NavLink> */}
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
