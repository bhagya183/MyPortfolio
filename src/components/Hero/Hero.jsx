import heroImage from "../../assets/hero/heroImage.png";
import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Bhagyashri</h1>
                <p className={styles.description}>
                    I'm a Full-stack developer with a passion for building web applications.
                </p>
                <div className={styles.buttonGroup}>
                    <a href="mailto:bhagyashri18399@gmail.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a
                        href="/assets/resume/Bhagyashri_Jadhav_Resume.pdf"
                        className={styles.contactBtn}
                        download="Bhagyashri_Jadhav_Resume.pdf"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <img className={styles.heroImg} src={heroImage} alt="Hero" />

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};