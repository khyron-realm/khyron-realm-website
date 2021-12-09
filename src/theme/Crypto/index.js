import React from "react";
import Link from "@docusaurus/Link";
import Headline from "@theme/Headline";

import styles from "./styles.module.scss";

function Crypto() {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
          <Headline
              title="Tokenomics"
              offset={1}
          />
          <div className={styles.question} align={"center"}>
              <h3 className={styles.title}>Coming soon ...</h3>
          </div>
      </div>
    </section>
  );
}

export default Crypto;
