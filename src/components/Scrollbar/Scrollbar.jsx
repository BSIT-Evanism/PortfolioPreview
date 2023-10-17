import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import styles from './Scrollbar.module.scss'

function Scrollbar() {
    const { scrollYProgress } = useScroll();
    const springY = useSpring(scrollYProgress);
    const coords = useTransform(springY, [0, 1], [0, 200]);


    return (
        <div>
            <motion.div className={styles.scrollbar}>
                <motion.div
                    style={{ y: coords }}
                    className={styles.scroller}
                ></motion.div>
            </motion.div>
        </div>
    )
}

export default Scrollbar