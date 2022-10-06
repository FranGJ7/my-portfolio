import styles from "./styles.module.scss"
import { BsFileEarmarkArrowDown } from "react-icons/bs"

export const WelcomeSection = () => (
    <>
        <div className={styles.container}>
            <div className={styles.titleSection}>
                <h2 className={styles.title}>Bem vindo ao Portifólio Web Fullstack</h2>
                <p className={styles.subTitle}>Aqui você vai encontrar meus trabalhos feitos como,
                    projetos pessoal e Freelancer com acesso ao link do site e código fonte, também foi criado  uma
                    linha do tempo de minha jornada como Desenvolvedor. </p>
            </div>
            <a href="https://drive.google.com/file/d/19YimB8t1BZzUn2Pp0qlJUvzw9PhtoOlB/view" target="blank">
                <button className={styles.button}>Curriculo.pdf <BsFileEarmarkArrowDown size={15} /></button>
            </a>
        </div>
    </>
)