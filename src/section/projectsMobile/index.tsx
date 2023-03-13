import { CardProjects } from "../../components/cards-projects-mobile";
import styles from "./styles.module.scss"

export const ProjectsMobile = () => {
   return (
      <>
         <div id="projects" className={styles.container}>
            <>
               <h2 className={styles.title}>Projetos Mobile</h2>
               <div className={styles.boxCards}>
                  <CardProjects />
               </div>
            </>

         </div>
      </>

   ); 
}