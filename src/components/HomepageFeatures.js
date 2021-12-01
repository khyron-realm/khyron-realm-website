import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Play with friends',
        Png: require('../../static/img/play.png').default,
        description: (
            <>
                Socialize with other people.
            </>
        ),
    },
    {
        title: 'Compete in auctions',
        Png: require('../../static/img/compete.png').default,
        description: (
            <>
                Compete in auctions to win new mines.
            </>
        ),
    },
    {
        title: 'Earn Crypto',
        Png: require('../../static/img/earn.png').default,
        description: (
            <>
                Earn crypto by progressing in the game.
            </>
        ),
    },
];

function Feature({Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
