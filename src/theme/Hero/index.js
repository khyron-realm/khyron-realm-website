import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from "./styles.module.scss";
import Image from "@theme/IdealImage";
import planet_light from "@site/static/img/pages/planet_robots_3.png";
import planet_dark from "@site/static/img/pages/planet_robots.png";


function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { isDarkTheme } = useThemeContext();
  return (
    <header id="hero" className={isDarkTheme ? clsx("hero", styles.banner_dark) : clsx("hero", styles.banner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>
      </div>

      <Image img={isDarkTheme ? planet_dark : planet_light} className={clsx("shadow-md", styles.image)} />
    </header>
  );
}

export default Hero;
