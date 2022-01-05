import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.scss";

const data = [
  {
    link: "/docs/team#alexandru-grigoras",
    image: "/img/robots/probe.png",
    name: <>Alexandru<br />GRIGORAS</>,
    role: <>Game<br />producer</>,
  },
  {
    link: "/docs/team#serban-chisca",
    image: "/img/robots/probe.png",
    name: <>Serban<br />CHISCA</>,
    role: <>Game<br />designer</>,
  },
  {
    link: "/docs/team#tudor-stoian",
    image: "/img/robots/crusher.png",
    name: <>Tudor<br />STOIAN</>,
    role: <>Game<br />Artist</>,
  },
  {
    link: "/docs/team#codrin-burlacu",
    image: "/img/robots/crusher.png",
    name: <>Codrin<br />BURLACU</>,
    role: <>Game<br />developer</>,
  },
  {
    link: "/docs/team#andrei-pecheanu",
    image: "/img/robots/worker.png",
    name: <>Andrei<br />PECHEANU</>,
    role: <>Sound<br />producer</>,
  },
  {
    link: "/docs/team#ana-popescu",
    image: "/img/robots/worker.png",
    name: <>Ana<br />POPESCU</>,
    role: <>Concept<br />artist</>,
  },
];

function Resource({ link, image, name, role }) {
  return (
    <Link className={clsx("card", styles.card)} to={link}>
      <div className="card__header" align={'center'}>
        {image && <img src={image} alt={name + "image"}/>}
        {name && <h3>{name}</h3>}
      </div>
      {role && (
        <div className="card__body" align={'center'}>
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
        <section id="resources" className={styles.resources}>
          <div className="container">
            <h1 className={styles.team_title}>Team</h1>
            <div className="underline"></div>

            <div className="row">
              {data[4] && (
                  <div className={clsx("col", styles.resource)}>
                    <Resource {...data[4]} />
                  </div>
              )}

              {data[3] && (
                  <div className={clsx("col", styles.resource)}>
                    <Resource {...data[3]} />
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