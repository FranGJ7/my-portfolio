import styles from "./styles.module.scss"
import { SplideCards } from "../../components/splideCard"
import Link from "next/link"

export const AboutMe = () => (

    <>
        <div id="about" className={styles.container}>
            <h2 className={styles.title}>Sobre mim</h2>
            <p className={styles.subTitle}> Sou Fransérgio Desenvolvedor Javascript FullStack algo que antes tinha pavor de conhecer acreditando ser apenas matemática e digitos 1 0 1 0 0 1 mas por sempre gostar muito de computador video games tecnologia comecei a trabalhar como Técnico de informatica cuidando de parte de Hardware Software Rede até mesmo Softwares Android atualizava ou adcionava roms customizada sempre curioso e querendo aprender tudo sobre. depois de muito tempo me dispertou a vontade de virar desenvolvedor por ter bastante amigos próximos programadores, me mostraram como era desde então tomei decisão de me tornar um !
Quando comecei o curso de Javascript e entendi como funcionava como era uma linguagem de programação me apaixonei  achei incrivel  a forma que comunicamos com o computador como criamos as interfaces interagimos com banco de dados levei como uma meta pra vida dedicar a isso, com a liberdade geográfica que pode te proporciona, tantas pessoa que pode ajuda facilitando a vida com recursos no computador e na palma da mão(Mobile) e resolvendo problemas das mesma.
A quase um ano de estudo faço projetos pessoal trabalho também com Freelancer e gosto muito  do que faço tanto parte Front quanto Back  Banco de dados, saiba mais sobre meus projetos freelas entra em meu GitHub explore meu LinkedIn na publicações tem mais detalhes dos projetos também, Meu Objetivo  é entra em uma empresa com equipe e aprender junto com amigos de trabalho para evoluir tanto quanto pessoa quanto como um Profissional.</p>
            <SplideCards />
            <div className={styles.boxArrow}>
                <Link href="#start">
                    <img className={styles.arrow} src="./arrow.png" alt="flecha retorna topo" />
                </Link>
            </div>
        </div>

    </>
) 