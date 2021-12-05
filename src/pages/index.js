import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import RoadmapTimeline from "../components/RoadmapTimeline";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary wrapper', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <img className="hero_image" src="/img/robots/worker.png" height="300px"/>
                <img className="hero_image" src="/img/robots/probe.png" height="300px"/>
                <img className="hero_image" src="/img/robots/crusher.png" height="300px"/>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/description">
                        Whitepaper
                    </Link>
                </div>
            </div>
        </header>
    );
}


export default function Home() {
    return (
        <Layout
            title={`Crypto MMO game`}
            description="Join RoboChain, a new crypto MMO mobile game<head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <RoadmapTimeline/>
            </main>
        </Layout>
    );
}
