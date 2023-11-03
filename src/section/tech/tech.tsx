import styles from "./styles.module.scss"
import { SiReact } from "react-icons/si"
import { FaDatabase, FaFigma, FaMobileAlt } from "react-icons/fa"

export const Tech = () =>
(
    <>
        <div id="tech" className={styles.container}>
            <h2 className={styles.title}>Tecnologias</h2>
        

            <div className={styles.techBox}>

                <div className={styles.techCards}>
                    <SiReact size='1.9rem' />
                    <h4 className={styles.titleCard}>Front-End</h4>
                    <p className={styles.subTitleCard}>React, Tailwind, Styled-Components</p>
                </div>

                <div className={styles.techCards}>
                    <FaDatabase size='1.6rem' />
                    <h3 className={styles.titleCard}>Back-End</h3>
                    <p className={styles.subTitleCard}>Node, Typescript, Spring Boot</p>
                </div>

                <div className={styles.techCards}>
                    <FaFigma size='1.8rem' />
                    <h3 className={styles.titleCard}>UI/UX </h3>
                    <p className={styles.subTitleCard}>Figma</p>
                </div>

                <div className={styles.techCards}>
                    <FaMobileAlt size='1.8rem' />
                    <h3 className={styles.titleCard}>Mobile </h3>
                    <p className={styles.subTitleCard}>React-Native, Typescript, Expo, Kotlin</p>
                </div>
            </div> 
        </div>

    </>
)