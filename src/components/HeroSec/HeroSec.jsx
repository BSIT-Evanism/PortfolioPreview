import React from 'react'
import Header from '../Header/Header';
import styles from './HeroSec.module.scss';
import Gitview from '../Gitview/Gitview';
import Callprogress from '../Callprogress/Callprogress';

function HeroSec() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.midHero}>
          <Gitview />
          <Callprogress />
        </div>
      </div>
    </>
  )
}

export default HeroSec;