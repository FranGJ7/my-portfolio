import styles from "./styles.module.scss"
import { SplideCards } from "../../components/splideCard"
import Link from "next/link"

export const AboutMe = () =>(

    <>
    <div id="about" className={styles.container}>
    <h2 className={styles.title}>Sobre mim</h2>
    <p className={styles.subTitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat tenetur nemo id optio ut distinctio eveniet ipsa rerum voluptate esse reprehenderit magni.</p>
     <SplideCards/>
     <div className={styles.boxArrow}>
        <Link href="#start">
        <img className={styles.arrow}  src="./arrow.png" alt="flecha retorna topo" />
        </Link>
    </div>
    </div>
    
    </>
) 