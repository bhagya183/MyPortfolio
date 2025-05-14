import React from 'react'
import styles from './Contact.module.css'
import emailIcon from '../../assets/contact/emailIcon.png'
import likedInIcon from '../../assets/contact/linkedinIcon.png'
import githubIcon from '../../assets/contact/githubIcon.png'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        
        <div className={styles.text}>
            <h2>Contact Me</h2> <br/>
            <p >
                Feel free to Reach Out!
            </p> <br/>

            <div >
                <ul className={styles.links}>
                    
                    <li className={styles.link}>

                        <img src={emailIcon} alt='Email Icon'/>
            
                        <a href="mailto:bhagyashri18399@gmail.com" target="_blank" rel="noopener noreferrer"> bhagyashri18399@gmail.com</a>

                    </li>

                    <li className={styles.link}>

                        <img src={likedInIcon} alt='LinkedIn Icon'/>
            
                        <a href="https://www.linkedin.com/in/bhagyashri-jadhav-165656239/" target="_blank" rel="noopener noreferrer"> bhagyashri-jadhav</a>

                    </li>

                    <li className={styles.link}>

                        <img src={githubIcon} alt='GitHub Icon'/>
            
                        <a href="https://github.com/bhagya183" target="_blank" rel="noopener noreferrer"> bhagya183 </a>

                    </li>
                </ul>
            </div>
            <br/>
            <hr/>
            <br/>
            <p className={styles.copyright}>
                Made with 💜 By Bhagyashri Jadhav.
            </p>
        </div>
    </footer>
  )
}
