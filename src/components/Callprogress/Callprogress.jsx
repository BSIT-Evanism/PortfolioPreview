import React from 'react'
import styles from './Callprogress.module.scss';
import { motion } from 'framer-motion';

function Callprogress() {
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <div
          className={styles.notice}
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
        >
          <div className={styles.ping}>
            <div className={styles.static} />
          </div>
          <motion.h1
            animate={{ y: toggle ? -100 : 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >Available for work</motion.h1>
          <motion.div
            className={styles.callAction}
            animate={{ y: toggle ? 0 : 100 }}
            transition={{ duration: 0.5, ease: "backOut" }}

          >
            <h1>Contact me</h1>
          </motion.div>
        </div>
      </div>
      <div className={styles.work}>
        <div className={styles.textwrap}>
          <h1>WORK IN PROGRESS...</h1>
          <h1>WORK IN PROGRESS...</h1>
        </div>
      </div>
    </div>
  )
}

export default Callprogress