import styles from "../styles/Projects.module.scss"
import { CardProjects } from "../src/components/card-projects";

export const Projects = () =>(
     <>
     <div className={styles.container}>
     <h1>Page Projects</h1>
     </div>
     <CardProjects/>
     </>
);