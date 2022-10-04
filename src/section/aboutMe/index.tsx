import styles from "./styles.module.scss"
import { SplideCards } from "../../components/splideCard"

export const AboutMe = () =>(

    <>
    <div className={styles.container}>
    <h2 className={styles.title}>About Me</h2>
    <p className={styles.subTitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat tenetur nemo id optio ut distinctio eveniet ipsa rerum voluptate esse reprehenderit magni.</p>
    

    <div className={styles.containerSplide}>
         <SplideCards/> 
    </div>

    </div>
    </>
    
)