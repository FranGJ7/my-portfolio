import styles from "./styles.module.scss"


export const WelcomeSection = ()=>(
    <>
    <div className={styles.container}>
    
    <div className={styles.titleSection}>
    <h1 className={styles.title}>Seja Bem Vindo em meu Portifólio</h1>
    <p className={styles.subTitle}>The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.</p>
    </div>
    
    <button className={styles.button}>Learn More</button>
     
    </div> 
    </>

     
)