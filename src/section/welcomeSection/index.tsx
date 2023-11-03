import styles from "./styles.module.scss"
import { BsFileEarmarkArrowDown } from "react-icons/bs"


export const WelcomeSection = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleSection}>
                    <h2 className={styles.title}>Olá sou o Fransérgio! <br /> Desenvolvedor Fullstack.</h2>
                    <p className={styles.subTitle}>Aqui você vai encontrar meus trabalhos como projetos pessoais e freelancer, incluindo links para visualização dos apps no Expo Go, além do acesso aos sites e códigos fonte.</p>
                </div>
                <a href="https://drive.google.com/file/d/187p7cW3NbBD4QOADEETmzSlSj_IcJwgj/view?usp=sharing" target="blank">
                    <button className={styles.button}>Curriculo <BsFileEarmarkArrowDown size={15} /></button>
                </a>
            </div>
        </>
    ) 
}
