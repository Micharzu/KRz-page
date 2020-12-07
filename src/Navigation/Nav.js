import React, { useEffect, useRef } from "react";
import "./nav-styles/Nav.css";

import { Link } from "react-router-dom";

import Logo from "../assets/icons/rsz-icon.png";

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
          <Link to="/" className="nav-link">
            <li>Główna</li>
          </Link>
          <Link to="/aktualnosci" className="nav-link">
            <li>Aktualności</li>
          </Link>
          <Link to="/zespol" className="nav-link">
            <li>Zespół</li>
          </Link>
          <Link to="/galeria" className="nav-link">
            <li>Galeria</li>
          </Link>
          <Link to="/multimedia" className="nav-link">
            <li>Multimedia</li>
          </Link>
          <Link to="/nuty" className="nav-link">
            <li>Nuty</li>
          </Link>
          <Link to="/kontakt" className="nav-link">
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
