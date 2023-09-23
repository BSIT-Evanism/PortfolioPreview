import React from 'react'
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.wrapper}>
      <p>software</p>
        <div className={styles.rollerwrapper}>
          
            <h1>evan solanoy</h1>
            <img src='/evan.svg' alt='evan' />
          
        </div>
        <p>engineer</p>
    </div>
  )
}

export default Header