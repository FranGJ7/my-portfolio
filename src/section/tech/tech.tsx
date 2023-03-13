import styles from "./styles.module.scss"
import { SiReact } from "react-icons/si"
import { FaDatabase, FaFigma, FaMobileAlt } from "react-icons/fa"

export const Tech = () =>
(
    <>
        <div id="tech" className={styles.container}>
            <h2 className={styles.title}>Tecnologias</h2>
            <p className={styles.subTitle}>Como desenvolvedor Fullstack, tanto para Web quanto para mobile, pratico algumas tecnologias que considero essenciais. No Front-end, utilizo HTML, SASS, React e Figma para a criação de mockups. No Back-end, utilizo Node.js com TypeScript, Express, Mongoose e Sequelize para a criação de bancos de dados e o Postman para testes de API. Além disso, utilizo Docker e Git em conjunto com essas tecnologias. Para desenvolvimento mobile, utilizo React Native, Expo e Android Studio em serviços da AWS. Em relação ao sistema operacional, prefiro o Linux.  
            </p>

            <div className={styles.techBox}>

                <div className={styles.techCards}>
                    <SiReact size='1.9rem' />
                    <h4 className={styles.titleCard}>Front-End</h4>
                    <p className={styles.subTitleCard}>React, Tailwind, Styled-Components</p>
                </div>

                <div className={styles.techCards}>
                    <FaDatabase size='1.6rem' />
                    <h3 className={styles.titleCard}>Back-End</h3>
                    <p className={styles.subTitleCard}>Node, Typescript Express</p>
                </div>

                <div className={styles.techCards}>
                    <FaFigma size='1.8rem' />
                    <h3 className={styles.titleCard}>UI/UX </h3>
                    <p className={styles.subTitleCard}>Figma</p>
                </div>

                <div className={styles.techCards}>
                    <FaMobileAlt size='1.8rem' />
                    <h3 className={styles.titleCard}>Mobile </h3>
                    <p className={styles.subTitleCard}>React-Native, Typescript, Expo</p>
                </div>
            </div> 
        </div>

    </>
)