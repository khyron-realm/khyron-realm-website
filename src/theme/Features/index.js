import React from "react";
import clsx from "clsx";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    title: <>Build</>,
    image: "/img/description/build.png",
    description: (
      <>Rebuild your base from the crash and help to establish a colony on the planet Khyron</>
    ),
  },
  {
    title: <>Collaborate</>,
    image: "/img/description/collaborate.png",
    description: <>Meet with other fleets and collaborate to gather resources and complete tasks</>,
  },
  {
    title: <>Earn</>,
    image: "/img/description/earn.png",
    description: (
      <>Receive rewards in crypto tokens for the in-game progress and invest into collectibles</>
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
            <Headline
              title="Description"
              offset={1}
            />

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
