import React from 'react'
import styles from './Experience.module.css'
import  skills  from '../../data/skills'
//import  history  from '../../data/history'

export const Experience = () => {
  return (
    <section id="skills" className={styles.container}>
        <h2 className={styles.title}> Skills </h2>

        {/* Skills Section */}
        <div className={styles.content}>
            <div className={styles.skills}>
                    {
                        skills.map((skill, id)=>{
                            return(
                                <div key={id} className={styles.skill}>
                                   <div className={styles.skillImageContainer}>
                                        <img src={skill.imageSrc} alt={skill.title} />
                                   </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })}
            </div>

            {/* Experience Section */}  
            {/*          
            <div className={styles.experience}>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id)=>{
                            return(
                                <li key={id} className={styles.historyItem}>
                                    <img src={historyItem.imageSrc} alt={historyItem.title} className={styles.historyImage}/>
                                    
                                    <div className={styles.historyItemDetails}>
                                        
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>
                                           {historyItem.experience.map((experience, id) => {

                                            return(
                                                <li key={id} className={styles.experience}>
                                                    <p>{experience}</p>
                                                </li>
                                            )
                                           }

                                        )}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    
                </ul>
            </div>    
            */}
        </div>
     </section>   
  )
}
