import React from 'react'
import styles from './Callprogress.module.scss';

function Callprogress() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.button}>
          <div className={styles.notice}>
            <div className={styles.ping}></div>
            <h1>Available for work</h1>
          </div>
        </div>
        <div className={styles.work}>Callprogress</div>
    </div>
  )
}

export default Callprogress