import mobileIcon from "../../../assets/icons/logoAndroid.png"
import webIcon from "../../../assets/icons/logoWeb.png"
import Image from "next/image"
import styles from "./styles.module.scss"
import { BsFileEarmarkArrowDown } from "react-icons/bs"
import Link from "next/link"


export const WelcomeSection = (props) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleSection}>
                    <h2 className={styles.title}>Olá sou o Fransérgio! <br /> Desenvolvedor  Javascript FullStack Web & Mobile</h2>
                    <p className={styles.subTitle}>Aqui você vai encontrar meus trabalhos como projetos pessoais e freelancer, incluindo links para visualização dos apps no Expo Go, além do acesso aos sites e códigos fonte. Também foi criada uma linha do tempo para acompanhar minha jornada como desenvolvedor.</p>
                </div>
                <a href="https://drive.google.com/file/d/1vOqKkvfx9ZOxvW1y3opFQl9gsLL4madI/view?usp=sharing" target="blank">
                    <button className={styles.button}>Curriculo <BsFileEarmarkArrowDown size={15} /></button>
                </a>
                <div className={styles.boxContainer}>
                    <Link href="#projects">
                    <div
                        className={styles.box}
                        onClick={() => props.setSelectSection(false)}
                    >
                       
                            <Image
                                src={mobileIcon}
                            />
                       
                        <h1 className={styles.titleBox}>Mobile</h1>
                    </div>
                    </Link>
                 
                    <Link href="#projects">
                    <div
                        className={styles.box}
                        onClick={() => props.setSelectSection(true)}
                    >
                        <Image
                            src={webIcon}
                        />
                        <h1 className={styles.titleBox}>Web</h1>
                    </div>
                    </Link>
                   
                     
                </div>
            </div>
        </>
    )
}