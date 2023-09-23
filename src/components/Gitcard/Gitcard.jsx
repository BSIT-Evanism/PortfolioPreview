import React from 'react'
import styles from './Gitcard.module.scss'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import {ErrorBoundary} from 'react-error-boundary'

function ToggleCard({repoName, repoDesc, repoUrl, repoLang, repoStars, repoForks, repoLicense, repoUpdated}) {

  const height = {
    initial: {
      height: 0
    },
    animate: {
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: {
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      
    <motion.div
      className={styles.toggleCard}
      variants={height}
      initial="initial"
      animate="animate"
      exit="exit"
      >
          <p>{repoDesc ? repoDesc : "no data"}</p>
          <a href={repoUrl ? repoUrl : "no data"} target="_blank" rel="noreferrer">Link to repo</a>
          <p>{repoStars ? repoStars : "no data"}</p>
          <p>{repoForks ? repoForks : "no data"}</p>
          <p>{repoLicense ? repoLicense : "no data"}</p>
          <p>{repoUpdated ? repoUpdated : "no data"}</p>
    </motion.div>
      </ErrorBoundary>
   
  )
}

function Gitcard({repoName, repoDesc, repoUrl, repoLang, repoStars, repoForks, repoLicense, repoUpdated}) {
  const [toggle, setToggle] = React.useState(false)



  return (
    <motion.div 
      className={styles.wrapper}
      >
      <h1>{repoName ? repoName : "no data"}</h1>
      <p>{repoLang ? repoLang : "no data"}</p>
      <motion.button 
        onClick={() => setToggle(!toggle)} 
        animate={{rotate: toggle ? 180 : 0}}
        >{toggle ? (<div className={styles.close}>Close</div>) : "more details"}</motion.button>
      <AnimatePresence>

      {toggle && (
        <ToggleCard 
          repoDesc={repoDesc ? repoDesc : "no data"}
          repoUrl={repoUrl ? repoUrl : "no data"}
          repoStars={repoStars ? repoStars : "no data"}
          repoForks={repoForks ? repoForks : "no data"}
          repoLicense={repoLicense ? repoLicense : "no data"}
          repoUpdated={repoUpdated ? repoUpdated : "no data"}
          
        />
          
       
      )}
      </AnimatePresence>
    </motion.div>
      
  )
}

export default Gitcard