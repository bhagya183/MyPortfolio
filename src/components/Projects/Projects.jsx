import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import projects from '../../data/project';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projects}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              skills={project.skills}
              demo={project.demo}
              source={project.source}
              
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;