import styles from "./styles.module.scss"
import { SiReact } from "react-icons/si"
import { FaDatabase, FaFigma } from "react-icons/fa"

export const Tech = () =>
(
    <>
        <div id="tech" className={styles.container}>
            <h2 className={styles.title}>Tecnologias</h2>
            <p className={styles.subTitle}>Como Desenvolvedor Fullstack estou sempre práticando algumas tecnologias que defini como base para aprendizado e não correr risco de 
            ficar pulando de uma para outra e acaba me perdendo, Front sempre a base HTML, SASS, React e Figma para criação das Mockup, em Back Mongose e Sequelize para criação
            em banco de dados Postman para teste de Api, ambiente de desenvolvimento com Vscode Google chrome e sistema operacional Linux.  
            </p>

            <div className={styles.techBox}>

                <div className={styles.techCards}>
                    <SiReact size='1.9rem' />
                    <h4 className={styles.titleCard}>Front-End</h4>
                    <p className={styles.subTitleCard}>Experiência com React.js</p>
                </div>

                <div className={styles.techCards}>
                    <FaDatabase size='1.6rem' />
                    <h3 className={styles.titleCard}>Back-End</h3>
                    <p className={styles.subTitleCard}>Experiência com Node e Banco de Dados</p>
                </div>

                <div className={styles.techCards}>
                    <FaFigma size='1.8rem' />
                    <h3 className={styles.titleCard}>UI/UX </h3>
                    <p className={styles.subTitleCard}>Experiência com Figma</p>
                </div>
            </div> 
        </div>

    </>
)