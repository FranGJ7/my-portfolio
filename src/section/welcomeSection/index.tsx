import styles from "./styles.module.scss"
import { BsFileEarmarkArrowDown } from "react-icons/bs"

export const WelcomeSection = () => (
    <>
        <div className={styles.container}>
            <div className={styles.titleSection}>
                <h2 className={styles.title}>Bem vindo ao Portfólio Web Fullstack</h2>
                <p className={styles.subTitle}>Aqui você vai encontrar meus trabalhos feito como
                    projetos pessoais e Freelancer com acesso ao link do site e código fonte, também foi criado  uma
                    linha do tempo de minha jornada como Desenvolvedor. </p>
            </div>
            <a href="https://drive.google.com/file/d/1E1ZlwETcKkApOzFn-FbZA5AMo2FGSJ4l/view?usp=sharing" target="blank">
                <button className={styles.button}>Curriculo <BsFileEarmarkArrowDown size={15} /></button>
            </a>
        </div>
    </>
)