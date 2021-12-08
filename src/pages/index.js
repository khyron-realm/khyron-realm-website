import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import FAQ from "@theme/FAQ";
import Features from "@theme/Features";
import Hero from "@theme/Hero";
import Resources from "@theme/Resources";
import Roadmap from "@theme/Timeline";
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
        <Roadmap/>
        <FAQ />
        <Resources />
      </main>
    </Layout>
  );
}

export default Home;
