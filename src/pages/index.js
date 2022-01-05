import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Hero from "@theme/Hero";
import Features from "@theme/Features";
import Projects from "@theme/Projects";
import Timeline from "@theme/Timeline";
import Team from "@theme/Team";
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
        <Projects />
        <Timeline/>
        <Team />
      </main>
    </Layout>
  );
}

export default Home;
