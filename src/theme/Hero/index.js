import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";
import Image from "@theme/IdealImage";
import planet_light from "/static/img/pages/planet_robots.png";


function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <header id="hero" className={clsx("hero", styles.banner)}>

      <div className="container">
          <br />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>
      </div>

      <Image img={planet_light} className={clsx("shadow-md", styles.image)} />
    </header>
  );
}

export default Hero;
