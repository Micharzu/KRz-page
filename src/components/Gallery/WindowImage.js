import React from "react";
import "./gallery-styles/WindowImage.css";

function WindowImage({ activeImg, deselectPhoto }) {
  return (
    <div className="shadow" onClick={deselectPhoto}>
      <div className="window">
        <div className="img-container">
          <img src={activeImg.url} alt="" />
        </div>
        <h3 className="desc">Bardzo super zdjęcie</h3>
        <h3 className="date">20.12.2020</h3>
      </div>
    </div>
  );
}

export default WindowImage;
