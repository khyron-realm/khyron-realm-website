import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    link: "/docs/team#serban-chisca",
    image: "/img/robots/crusher.png",
    name: <>Serban CHISCA</>,
    role: <>Game designer</>,
  },
  {
    link: "/docs/team#alexandru-grigoras",
    image: "/img/robots/probe.png",
    name: <>Alexandru GRIGORAS</>,
    role: <>Game producer</>,
  },
  {
    link: "/docs/team#tudor-stoian",
    image: "/img/robots/crusher.png",
    name: <>Tudor STOIAN</>,
    role: <>Game<br />Artist</>,
  },
  {
    link: "/docs/team#codrin-burlacu",
    image: "/img/robots/worker.png",
    name: <>Codrin BURLACU</>,
    role: <>Game developer</>,
  },
  {
    link: "/docs/team#andrei-pecheanu",
    image: "/img/robots/worker.png",
    name: <>Andrei PECHEANU</>,
    role: <>Blockchain developer</>,
  },
  {
    link: "/docs/team#ana-popescu",
    image: "/img/robots/worker.png",
    name: <>Ana POPESCU</>,
    role: <>Concept<br />artist</>,
  },
  {
    link: "/docs/team#ioan-suflet",
    image: "/img/robots/worker.png",
    name: <>Ioan SUFLET</>,
    role: <>Web developer</>,
  },
];

function Resource({ link, image, name, role }) {
  return (
    <Link className={clsx("card", styles.card)} to={link}>
      <div className="card__header">
        {image && <img src={image} alt={name + "image"}/>}
        {name && <h3>{name}</h3>}
      </div>
      {role && (
        <div className="card__body">
          <p>{role}</p>
        </div>
      )}
    </Link>
  );
}

function Team() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="resouces" className={styles.resources}>
          <div className="container">
            <Headline
              title="Team"
              offset={1}
            />

            <div className="row">
              {data[3] && (
                  <div className={clsx("col", styles.resource)}>
                    <Resource {...data[3]} />
                  </div>
              )}

              {data[4] && (
                  <div className={clsx("col", styles.resource)}>
                    <Resource {...data[4]} />
                  </div>
              )}

              {data[0] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[0]} />
                </div>
              )}

              {data[1] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[1]} />
                </div>
              )}

              {data[2] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[2]} />
                </div>
              )}

              {data[5] && (
                  <div className={clsx("col", styles.resource)}>
                    <Resource {...data[5]} />
                  </div>
              )}

              {data[6] && (
                  <div className={clsx("col", styles.resource)}>
                    <Resource {...data[6]} />
                  </div>
              )}
            </div>

          </div>
        </section>
      )}
    </>
  );
}

export default Team;