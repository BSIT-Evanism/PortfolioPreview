import React, { useEffect } from 'react'
import styles from './Gitview.module.scss';
import Marquee from 'react-fast-marquee';


function Gitview() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }
    , [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>Gitview</h1>
        <div className={styles.marquee}>
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            className={styles.marqueeText}
          >Local time &nbsp;-&nbsp; {time}</Marquee>
        </div>
      </div>
    </div>
  )
}

export default Gitview