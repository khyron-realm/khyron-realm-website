import React from "react";
import clsx from "clsx";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    title: <>Create</>,
    image: "/img/description/create.png",
    description: (
      <>Rebuild your base from the crash and help to establish a colony on the planet Khyron</>
    ),
  },
  {
    title: <>Compete</>,
    image: "/img/description/compete.png",
    description: <>Meet with other fleets and compete to gather resources and complete tasks</>,
  },
  {
    title: <>Collect</>,
    image: "/img/description/collect.png",
    description: (
      <>Gather resources by using the robots to mine for silicon, lithium and titanium</>
    ),
  },
];

function Feature({ title, image, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div align={"center"}><img src={image} alt={title + " image"} height={"200px"}/></div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="features" className={styles.features}>
          <div className="container">
            <h1 className={styles.features_title}>Description</h1>
            <div className="underline"></div>

            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;
