import React from 'react'
import Header from '../Header/Header';
import styles from './HeroSec.module.scss';
import Gitview from '../Gitview/Gitview';
import Callprogress from '../Callprogress/Callprogress';
import Scrollbar from '../Scrollbar/Scrollbar';
import Projects from '../Projects/Projects';

function HeroSec() {
  return (
    <>
      <Scrollbar />
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.midHero}>
          <Gitview />
          <Callprogress />
        </div>
      </div>
      <div className={styles.midSection}>
        <Projects />
        <div className={styles.spacer} />
      </div>
      <div className={styles.blogs}>

      </div>
    </>
  )
}

export default HeroSec;