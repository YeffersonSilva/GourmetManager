import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Sabores</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="../../public/hamb/burger-6309618_1280.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Sabores</h1>
                <h1 className="title dishes_title">do Rio</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="../../public/hamb/logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">do Rio</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
