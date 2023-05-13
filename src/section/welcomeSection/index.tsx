import styles from "./styles.module.scss"
import { BsFileEarmarkArrowDown } from "react-icons/bs"


export const WelcomeSection = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleSection}>
                    <h2 className={styles.title}>Olá sou o Fransérgio! <br /> Desenvolvedor  Javascript FullStack Web & Mobile</h2>
                    <p className={styles.subTitle}>Aqui você vai encontrar meus trabalhos como projetos pessoais e freelancer, incluindo links para visualização dos apps no Expo Go, além do acesso aos sites e códigos fonte. Também foi criada uma linha do tempo para acompanhar minha jornada como desenvolvedor.</p>
                </div>
                <a href="https://drive.google.com/file/d/12pPAhlD7yWtvuOV7VrtzN2h8klAqOK_0/view?usp=sharing" target="blank">
                    <button className={styles.button}>Curriculo <BsFileEarmarkArrowDown size={15} /></button>
                </a>
            </div>
        </>
    )
}