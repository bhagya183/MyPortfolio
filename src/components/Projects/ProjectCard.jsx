import React from 'react';
import styles from './ProjectCard.module.css';



const ProjectCard = ({ title, imageSrc, description, skills = [], demo, source }) => {
  console.log({ title, imageSrc, description, skills, demo, source }); // Debugging
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.images} /> <br/>
      <h3 className={styles.title}>{title}</h3> <br/>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {(skills || []).map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;