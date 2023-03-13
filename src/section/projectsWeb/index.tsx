import { CardProjects } from "../../components/cards-projects-web";
import styles from "./styles.module.scss"


export const ProjectsWeb = () => {

   return (
      <>
         <div id="projects" className={styles.container}>
            <>
               <h2 className={styles.title}>Projetos Web</h2>
               <div className={styles.boxCards}>
                  <CardProjects />
               </div>
            </>

         </div>
      </>

   );
}