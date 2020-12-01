import React from "react";
import "./nav-styles/Nav.css";

function Nav() {
  const navTo = (section) => {
    console.log(section);
  };
  return (
    <div className="navbar">
      <div className="nav-links">
        <div className="nav-link" onClick={() => navTo("home")}>
          <p>Główna</p>
        </div>
        <div className="nav-link" onClick={() => navTo("news")}>
          <p>Aktualności</p>
        </div>
        <div className="nav-link" onClick={() => navTo("band")}>
          <p>Zespół</p>
        </div>
        <div className="nav-link" onClick={() => navTo("gallery")}>
          <p>Galeria</p>
        </div>
        <div className="nav-link" onClick={() => navTo("multimedia")}>
          <p>Multimedia</p>
        </div>
        <div className="nav-link" onClick={() => navTo("sheets")}>
          <p>Nuty</p>
        </div>
        <div className="nav-link" onClick={() => navTo("contact")}>
          <p>Kontakt</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
