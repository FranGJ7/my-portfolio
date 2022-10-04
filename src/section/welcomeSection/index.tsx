import styles from "./styles.module.scss"

export const WelcomeSection = () => (
    <>
        <div className={styles.container}>
            <div className={styles.titleSection}>
                <h2 className={styles.title}>Seja Bem vindo em Meu Portifólio</h2>
                <p className={styles.subTitle}>Aqui você vai encontrar meus trabalhos feitos como,
                    projetos pessoal e Freelancer com acesso ao link do site e código fonte, também foi criado  uma
                    linha do tempo de minha jornada como Desenvolvedor. </p>
            </div>
            <button className={styles.button}>CV</button>
        </div>
    </>
)