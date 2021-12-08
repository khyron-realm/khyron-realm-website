import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Image from "@theme/IdealImage";
import useThemeContext from '@theme/hooks/useThemeContext';
import mineLight from "@site/static/img/pages/light/mine.png";
import mineDark from "@site/static/img/pages/dark/mine.png";
import styles from "./styles.module.scss";

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

      <Image img={isDarkTheme ? mineDark : mineLight} className={clsx("shadow-md", styles.image)} />
    </header>
  );
}

export default Hero;
