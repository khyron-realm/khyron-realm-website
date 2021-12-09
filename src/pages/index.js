import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Crypto from "@theme/Crypto";
import Features from "@theme/Features";
import Hero from "@theme/Hero";
import Team from "@theme/Team";
import Timeline from "@theme/Timeline";
import styles from "./styles.module.scss";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { tagline } = siteConfig;

  return (
    <Layout description={tagline}>
      <Hero />

      <main className={styles.main}>
        <Features />
        <Timeline/>
        <Crypto />
        <Team />
      </main>
    </Layout>
  );
}

export default Home;
