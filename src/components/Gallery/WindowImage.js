import React, { useEffect, useRef } from "react";
import "./gallery-styles/WindowImage.css";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

function WindowImage({ activeImg, deselectPhoto }) {
  const imgContainerRef = useRef();
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav-items");

  useEffect(() => {
    body.style.paddingRight = "16px";
    nav.classList.add("no-scrollbar");
    disableBodyScroll(imgContainerRef.current);
    return () => {
      clearAllBodyScrollLocks();
      body.style.paddingRight = "0";
      nav.classList.remove("no-scrollbar");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shadow" onClick={deselectPhoto}>
      <div className="window">
        <div className="img-container" ref={imgContainerRef}>
          <img src={activeImg.url} alt="" />
        </div>
        <h3 className="desc">Bardzo super zdjęcie</h3>
        <h3 className="date">20.12.2020</h3>
      </div>
    </div>
  );
}

export default WindowImage;
