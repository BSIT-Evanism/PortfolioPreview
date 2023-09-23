import React from 'react'
import styles from './Gitview.module.scss';

function Gitview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>Gitview</h1>
        <div className={styles.marquee}>
          <p>marquee</p>
        </div>
      </div>
    </div>
  )
}

export default Gitview