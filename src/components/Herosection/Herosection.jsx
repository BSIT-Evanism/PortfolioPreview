import React, { useEffect, useRef, useState } from "react";
import styles from "./Herosection.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Herosection() {
  const { scrollYProgress } = useScroll();
  const springY = useSpring(scrollYProgress);
  const coords = useTransform(springY, [0, 1], [0, 200]);

  return (
    <>
      <motion.div className={styles.scrollbar}>
        <motion.div
          style={{ y: coords }}
          className={styles.scroller}
        ></motion.div>
      </motion.div>
      <div className={styles.wrapper}>
        <div className={styles.border}>
          <div className={styles.top}>
            <div id="box" className={styles.center}>
              <h1>WORK IN PROGRESS...</h1>
            </div>
          </div>
          <div className={styles.title}>
            <h1 className="innerTitle">evan solanoy</h1>
            <img
              className="innerImage"
              src="../../../public/evan.svg"
              alt="evan"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <h2 id="inview">check out my other creations...</h2>
        </div>
      </div>
    </>
  );
}

export default Herosection;
