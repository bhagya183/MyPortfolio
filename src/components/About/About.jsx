import React from 'react'
import styles from './About.module.css'
import aboutImage from '../../assets/about/aboutImage.png'
import cursorIcon from '../../assets/about/cursorIcon.png'
import serverIcon from '../../assets/about/serverIcon.png'


export const About = () => {
  return (
    <section id='about' className={styles.container}>
    
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <img className={styles.aboutImage} src={aboutImage} alt="aboutImage" />

          <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursorIcon} alt="cursorIcon" />

                    <div className={styles.aboutItemText}>
                        <h3> Frontend Developer </h3> <br/>

                        <p> 
                            I'm frontend developer with a passion for creating beautiful and functional user interfaces.
                            I have experience with HTML, CSS, and JavaScript, and I'm always looking to learn new technologies and improve my skills.
                        </p>
                    </div>
                </li>
          </ul>


          <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="serverIcon" />

                    <div className={styles.aboutItemText}>
                        <h3> Backend Developer </h3> <br/>

                        <p> 
                            I have experience developing fast & optimised backend system's and API's.
                        </p>
                    </div>
                </li>
          </ul>
            
        </div>
    </section>
  )
}
