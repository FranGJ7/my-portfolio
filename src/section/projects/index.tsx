import { CardProjects } from "../../components/card-projects";
import styles from "./styles.module.scss"

export const Projects = () => {

   return (
      <>
         <div id="projects" className={styles.container}>

            <h2 className={styles.title}>Projetos</h2>

            <div className={styles.boxCards}>

               <CardProjects />
            </div>

         </div>
      </>

   );
}