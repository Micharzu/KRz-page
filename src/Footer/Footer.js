import React from "react";
import "./footer-styles/Footer.css";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="footer">
      <div className="copyrights">
        <p>COPYRIGHT © 2020 – RODZINNE STUDIO ŻAK</p>
      </div>
      <IconContext.Provider value={{ size: "2em", color: "white" }}>
        <div className="social-media">
          <FaFacebook
            className="sm-link"
            onClick={() => {
              openLink(
                "https://www.facebook.com/Rodzinne-Studio-%C5%BBak-107425844539585"
              );
            }}
          />
          <FaYoutube
            className="sm-link"
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
