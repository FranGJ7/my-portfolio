import styles from "./styles.module.scss"
import {SiReact} from "react-icons/si"
import {FaDatabase, FaFigma} from "react-icons/fa"

export const Tech = () =>
(
    <>
     <div className={styles.container}>
    <h2 className={styles.title}>Technologies</h2>
    <p className={styles.subTitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat tenetur nemo id optio ut distinctio eveniet ipsa rerum voluptate esse reprehenderit magni.</p>
    
    <div className={styles.techBox}>
    
       <div className={styles.techCards}>
       <SiReact size='1.9rem'/>
       <h4 className={styles.titleCard}>Front-End</h4>
       <p className={styles.descriptionCard}>
       
        <p className={styles.subTitleCard}>Experiência com React.js</p>
        
       
       </p>
       </div>

       <div className={styles.techCards}>
       <FaDatabase size='1.6rem'/>
       <h3 className={styles.titleCard}>Back-End</h3>
       <p className={styles.descriptionCard}>
       
        <p className={styles.subTitleCard}>Experiência com Node e Banco de Dados</p>
       
      
       </p>
       </div>

       <div className={styles.techCards}>
       <FaFigma size='1.8rem'/>
       <h3 className={styles.titleCard}>UI/UX</h3>
       <p className={styles.descriptionCard}>
       
        <p className={styles.subTitleCard}>Experiência com Figma</p>
        
        

       </p>
       </div>

    </div>
    </div>
   
    </>
)