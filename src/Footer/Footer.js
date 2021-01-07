import React, { useRef } from "react";
import "./footer-styles/Footer.css";

import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";

function Footer() {
  let tooltipTimeout;
  const mailRef = useRef();
  const tooltipRef = useRef();
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  const copyMailToClipboard = () => {
    let tempInput = document.createElement("input");
    mailRef.current.appendChild(tempInput);
    tempInput.setAttribute("value", mailRef.current.innerText);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    mailRef.current.removeChild(tempInput);
    flashToolTip();
  };

  const flashToolTip = () => {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    tooltipRef.current.classList.add("opened");
    tooltipTimeout = setTimeout(() => {
      tooltipRef.current.classList.remove("opened");
    }, 2000);
  };

  return (
    <div className="footer">
      <div className="copyrights">
        <p>COPYRIGHT © 2020 – KRYSTYNA RZUCIDŁO</p>
      </div>
      <div className="contact" onClick={() => copyMailToClipboard()}>
        <span className="tooltip" ref={tooltipRef}>
          Skopiowano do schowka
        </span>
        <IconContext.Provider value={{ size: "2em", color: "white" }}>
          <IoIosMail className="mail-icon" />
          <div className="mail">
            <p ref={mailRef}>Place@holder.com</p>
          </div>
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ size: "2em", color: "white" }}>
        <div className="social-media">
          <FaYoutube
            className="sm-link yt"
            onClick={() => {
              openLink(
                "https://www.youtube.com/channel/UCV00p0kcO73K3IGoh1N6huA"
              );
            }}
          />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Footer;
