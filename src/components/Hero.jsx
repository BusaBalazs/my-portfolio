import React from "react";

import classes from "./Hero.module.css";
import { laptop, photo } from "../assets";
//-----------------------------------------------
//-----------------------------------------------
const Hero = () => {
  return (
    <section className={classes["hero-section"]}>
      <img src={laptop} alt="laptop" />
      <div className={classes["hero-card"]}>
        <h2>Grafikus & Fejlesztő</h2>
        <img src={photo} alt="" />
        <h1>John Franks</h1>
        <p>info.info@gmail.com</p>
        <button className={classes["hire-me-btn"]}>
          <a href="mailto:fishbalazs@gmail.com">Üzenet</a>
        </button>
      </div>
    </section>
  );
};

//-----------------------------------------------
export default Hero;
