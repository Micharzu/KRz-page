import React, { useEffect, useRef } from "react";
import Chimp from "../../assets/photos/random_chimp_event.jpeg";
import "./home-styles/Home.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  const imgRef = useRef();
  const imgContainerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const gapRef = useRef();
  const headlineRef = useRef();
  const timeline = gsap.timeline();
  useEffect(() => {
    timeline
      .to(imgContainerRef.current, {
        duration: 1,
        height: "100%",
      })
      .to(gapRef.current, { duration: 1.6, width: "0" }, "<")
      .to(imgContainerRef.current, { duration: 0.4, width: "100vw" })
      .to(
        headlineRef.current,
        { duration: 0.4, filter: "blur(0px)", scale: "1.05" },
        "<"
      );
    gsap.to(imgRef.current, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: imgContainerRef.current,
        scrub: true,
      },
    });
  });
  return (
    <div className="home">
      <div className="img-container">
        <div className="hero-image" ref={imgContainerRef}>
          <img ref={imgRef} className="the-img" src={Chimp} alt="monke" />
          <div className="headline" ref={headlineRef}>
            <h1>return to</h1>
            <span className="gap" ref={gapRef}></span>
            <h1>&nbsp;monkee</h1>
          </div>
        </div>
      </div>
      <div className="spam">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          unde fuga cupiditate perspiciatis similique illo officia inventore,
          quaerat ducimus reiciendis, tempore, eos harum. Odit fugiat quasi
          exercitationem iste explicabo quas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis quia similique enim deserunt
          facere, recusandae, voluptatibus possimus voluptatem quam adipisci
          numquam illum suscipit obcaecati a odit autem molestiae fugit debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          ratione a corporis nisi est, odio aliquam ipsam corrupti nesciunt
          dolor debitis quisquam commodi, fugiat quasi, sequi recusandae.
          Aliquid, nesciunt quos? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Perferendis unde fuga cupiditate perspiciatis
          similique illo officia inventore, quaerat ducimus reiciendis, tempore,
          eos harum. Odit fugiat quasi exercitationem iste explicabo quas? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia
          similique enim deserunt facere, recusandae, voluptatibus possimus
          voluptatem quam adipisci numquam illum suscipit obcaecati a odit autem
          molestiae fugit debitis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias ratione a corporis nisi est, odio aliquam
          ipsam corrupti nesciunt dolor debitis quisquam commodi, fugiat quasi,
          sequi recusandae. Aliquid, nesciunt quos? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Perferendis unde fuga cupiditate
          perspiciatis similique illo officia inventore, quaerat ducimus
          reiciendis, tempore, eos harum. Odit fugiat quasi exercitationem iste
          explicabo quas? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis quia similique enim deserunt facere, recusandae,
          voluptatibus possimus voluptatem quam adipisci numquam illum suscipit
          obcaecati a odit autem molestiae fugit debitis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Molestias ratione a corporis nisi
          est, odio aliquam ipsam corrupti nesciunt dolor debitis quisquam
          commodi, fugiat quasi, sequi recusandae. Aliquid, nesciunt quos?
        </p>
      </div>
    </div>
  );
}

export default Home;
