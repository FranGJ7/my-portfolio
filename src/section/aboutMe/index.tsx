import styles from "./styles.module.scss"
import { SplideCards } from "../../components/splideCard"
import Link from "next/link"

export const AboutMe = () => (

    <>
        <div id="about" className={styles.container}>
            <h2 className={styles.title}>Sobre mim</h2>
            <p className={styles.subTitle}> "Dev com experiência em desenvolvimento de aplicativos móveis com React Native e TypeScript, habilidades em gerenciamento de contêineres Docker e conhecimento em AWS e auso de sistema Linux. Além disso, possuo uma paixão pelo desenvolvimento back-end com Spring Boot em Kotlin."  
</p>
           <div className={styles.splideCard}>
            <SplideCards />
            </div>
            <div className={styles.boxArrow}>
                <Link href="#start">
                    <img className={styles.arrow} src="./arrow.png" alt="flecha retorna topo" />
                </Link>
            </div>
        </div>

    </>
)  
