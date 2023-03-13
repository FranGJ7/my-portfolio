import styles from "./styles.module.scss"
import { SplideCards } from "../../components/splideCard"
import Link from "next/link"

export const AboutMe = () => (

    <>
        <div id="about" className={styles.container}>
            <h2 className={styles.title}>Sobre mim</h2>
            <p className={styles.subTitle}> Sou Fransérgio desenvolvedor Javascript FullStack e Mobile algo que antes tinha pavor de conhecer acreditando ser apenas matemática e dígitos 1 0 1 0 0 1, mas por sempre gostar muito de computador, video games e tecnologias comecei a trabalhar como Técnico de informática cuidando da parte de Hardware, Software Rede e até mesmo Softwares Android. Atualizava ou adicionava ROMs customizadas, sempre fui curioso, querendo aprender tudo sobre. Depois de muito tempo me despertou a vontade de virar desenvolvedor por ter bastante amigos próximos que são programadores, me mostraram como era e desde então tomei a decisão de me tornar um! Quando comecei o curso de Javascript e entendi como funciona e como é uma linguagem de programação, me apaixonei e achei incrível a forma que nos comunicamos com o computador, como criamos as interfaces e  interagimos com banco de dados, além da liberdade geográfica que pode me proporcionar e  levei como uma meta pra vida dedicar-me a isso! Tantas pessoas que podemos ajudar facilitando a vida com recursos no computador e na palma da mão Mobile, resolvendo problemas das mesmas.  
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