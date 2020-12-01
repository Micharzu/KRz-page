import React from "react";
import "./nav-styles/Nav.css";

import { Link } from "react-router-dom";

function Nav() {
  const navTo = (section) => {
    console.log(section);
  };
  return (
    <div className="navbar">
      <ul className="nav-links">
        <Link to="/" className="nav-link" onClick={() => navTo("home")}>
          <li>Główna</li>
        </Link>
        <Link
          to="/aktualnosci"
          className="nav-link"
          onClick={() => navTo("news")}
        >
          <li>Aktualności</li>
        </Link>
        <Link to="/zespol" className="nav-link" onClick={() => navTo("band")}>
          <li>Zespół</li>
        </Link>
        <Link
          to="/galeria"
          className="nav-link"
          onClick={() => navTo("gallery")}
        >
          <li>Galeria</li>
        </Link>
        <Link
          to="/multimedia"
          className="nav-link"
          onClick={() => navTo("multimedia")}
        >
          <li>Multimedia</li>
        </Link>
        <Link to="/nuty" className="nav-link" onClick={() => navTo("sheets")}>
          <li>Nuty</li>
        </Link>
        <Link
          to="/kontakt"
          className="nav-link"
          onClick={() => navTo("contact")}
        >
          <li>Kontakt</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
