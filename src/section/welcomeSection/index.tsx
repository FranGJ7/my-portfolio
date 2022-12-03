import styles from "./styles.module.scss"
import { BsFileEarmarkArrowDown } from "react-icons/bs"

export const WelcomeSection = () => (
    <>
        <div className={styles.container}>
            <div className={styles.titleSection}>
                <h2 className={styles.title}>Bem vindo ao Portfólio Front-End</h2>
                <p className={styles.subTitle}>Aqui você vai encontrar meus trabalhos feito como
                    projetos pessoais e Freelancer com acesso ao link do site e código fonte, também foi criado  uma
                    linha do tempo de minha jornada como Desenvolvedor. </p>
            </div>
            <a href="https://docs.google.com/document/d/1r6Ps5D-jcriCm0LeuY741zv2emgMwpLaWg2N5OqRqI0/edit?usp=sharing" target="blank">
                <button className={styles.button}>Curriculo <BsFileEarmarkArrowDown size={15} /></button>
            </a>
        </div>
    </>
)