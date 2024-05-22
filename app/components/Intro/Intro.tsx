import React from "react";
import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  return (
    <section className={styles.landingPage}>
      <div className={styles.content}>
        <h1>Instant and <br/> Reliable Electronics Repair Near You!</h1>
        <button className={styles.repairButton}><img src="/tool.svg" alt="" /> <span>Start a Repair</span></button>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/broken-phone.svg"
          alt="Broken phone"
          className={styles.mainImage}
        />
      </div>
    </section>
  );
};

export default Intro;
