import styles from "./styles.module.scss"
import { SplideCards } from "../../components/splideCard"
import Link from "next/link"

export const AboutMe = () => (

    <>
        <div id="about" className={styles.container}>
            <h2 className={styles.title}>Sobre mim</h2>
            <p className={styles.subTitle}> "Sou Fransérgio, atuo na área de T.I. há alguns anos. No início da minha carreira, trabalhei como desenvolvedor web, realizando projetos freelance. Atualmente, estou direcionando minha expertise para o desenvolvimento mobile, utilizando a tecnologia React Native. Tenho experiência com TypeScript, uma linguagem que ajuda na construção de aplicativos robustos e escaláveis. Além disso, sou especializado em testes unitários utilizando Jest, garantindo a qualidade e confiabilidade do meu código. Também utilizo ferramentas como Git e Docker para controle de versão e gerenciamento eficiente de contêineres. Sou apaixonado por criar experiências de usuário envolventes e funcionais, e estou sempre buscando aprender e me atualizar para entregar soluções de alta qualidade. Vamos conectar e explorar possíveis colaborações!"  
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
