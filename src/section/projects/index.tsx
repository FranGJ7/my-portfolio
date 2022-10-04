import { CardProjects } from "../../components/card-projects";
import styles from "./styles.module.scss"

export const Projects = () =>{


   return(
      <>
      <div className={styles.container}>
       <h2 className={styles.title}>Projects</h2>

      <div className={styles.boxCards}>
          
       <CardProjects/>
      </div>
      
      </div>

      </>
 
    );
}