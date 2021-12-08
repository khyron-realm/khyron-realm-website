import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from "clsx";
import styles from "./styles.module.scss";

function AboutHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">About</h1>
                <p className="hero__subtitle">Coming soon ...</p>
            </div>
        </header>
    );
}

export default function MyReactPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Crypto MMO game ${siteConfig.title}`}
            description="Join RoboChain, a new crypto MMO mobile game <head />">
            <AboutHeader />
            <main>

            </main>
        </Layout>
    );
}