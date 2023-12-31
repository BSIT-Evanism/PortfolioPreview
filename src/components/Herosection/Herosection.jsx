import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styles from "./Herosection.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Octokit } from "@octokit/rest";
import Gitcard from "../Gitcard/Gitcard";


function Herosection() {
  const { scrollYProgress } = useScroll();
  const [repos, setRepos] = useState([]);
  const springY = useSpring(scrollYProgress);
  const coords = useTransform(springY, [0, 1], [0, 200]);
  const opac = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opaci = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const [time, setTime] = useState("00:00:00");
  const [hover, setHover] = useState(false);

  // const octokit = new Octokit({
  //   auth: import.meta.env.GITHUB_TOKEN
  // });

  // useEffect(() => {
  //   octokit.request('GET /users/{username}/repos', {
  //     username: 'BSIT-Evanism'
  //   }).then(({ data }) => {
  //     setRepos(data);
  //   console.log(repos);
  //   });
  // }, [])



  useLayoutEffect(() => {

    setTimeout(() => {
      const d = new Date();
      const h = d.getHours();
      const s = d.getSeconds();
      const m = d.getMinutes();
      setTime(`${h}:${m}:${s}`);
    }, 1000);

  }, [time])



  return (
    <>
      <motion.div className={styles.scrollbar}>
        <motion.div
          style={{ y: coords }}
          className={styles.scroller}
        ></motion.div>
      </motion.div>
      <div className={styles.wrapper}>
        <div className={styles.border}>
          <div className={styles.top}>
            <motion.div
              className={styles.work}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <motion.a href="https://bento.me/evansolanoy"
                animate={{ y: hover ? "-5rem" : 0, transition: { duration: 0.2, ease: "linear" } }}
                className={styles.contact}
                target="_blank"
                rel="noreferrer">
                <h1>CONTACT ME</h1>

              </motion.a>
              <motion.div
                className={styles.ping}
                animate={{ y: hover ? "-5rem" : 0, transition: { duration: 0.2, ease: "easeInOut" } }}
              />
              <motion.p
                animate={{ y: hover ? "-5rem" : 0, transition: { duration: 0.2, ease: "easeInOut" } }}

              >Available for work</motion.p>
            </motion.div>
            <div className={styles.box}>
              
              <div className={styles.innerBox}>
                <Gitcard />
                {repos.map((repo) => (
                  <Gitcard
                    key={repo.id} 
                    repoName={repo.name ? repo.name : "No name"} 
                    repoDesc={repo.description ? repo.description : "No description"} 
                    repoUrl={repo.html_url ? repo.html_url : "No url"}
                    repoLang={repo.language ? repo.language : "No language"}
                    repoStars={repo.stargazers_count ? repo.stargazers_count : "No stars"}
                    repoForks={repo.forks ? repo.forks : "No forks"}
                    repoLicense={repo.license ? repo.license : "No license"}
                    repoUpdated={repo.updated_at ? repo.updated_at : "No updated"}
                    />
                ))}
              </div>
              <Marquee
                className={styles.marquee__bottom}
              // gradient={true}
              >
                <p>Local time: {time}  &emsp; Legazpi City, Albay</p>
              </Marquee>
            </div>
            <div id="box" className={styles.center}>
              <h1>WORK IN PROGRESS...</h1>
              <h1>WORK IN PROGRESS...</h1>
            </div>
          </div>
          <div className={styles.title}>

            <motion.h1
              style={{ opacity: opac }}
              className="innerTitle"
            >evan solanoy</motion.h1>
            <motion.img
              style={{ opacity: opaci }}
              className="innerImage"
              src="/evan.svg"
              alt="evan"
            />

          </div>
        </div>
        <div className={styles.footer}>
          <h2 id="inview">check out my other creations...</h2>
        </div>
      </div>
    </>
  );
}

export default Herosection;
