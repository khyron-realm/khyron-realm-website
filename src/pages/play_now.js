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
                <h1 className="hero__title">Getting started</h1>
                <h1 className="hero__subtitle">Play a demo version on mobile</h1>
                <a href={"https://testflight.apple.com/join/K4Yyhzjk"}><img src={"/img/icons/app_store.png"} height={"100px"} /></a>
                <a href={"https://play.google.com/apps/internaltest/4700888865694045512"}><img src={"/img/icons/play_store.png"} height={"100px"} /></a>
                <h5><i>GMail needed for Play store testing, join Discord for more details.</i></h5>
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