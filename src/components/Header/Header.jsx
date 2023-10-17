import React from 'react'
import styles from './Header.module.scss';
import { useScroll, motion } from 'framer-motion';

function Header() {
  const { scrollYProgress } = useScroll()


  return (
    <div className={styles.wrapper}>
      <p>software</p>
      <div className={styles.rollerwrapper}>

        <motion.h1
          animate={{ opacity: scrollYProgress }}
        >evan solanoy</motion.h1>
        <img src='/evan.svg' alt='evan' />

      </div>
      <p>engineer</p>
    </div>
  )
}

export default Header
