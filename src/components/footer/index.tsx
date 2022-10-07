import styles from "./styles.module.scss";
import { WiAlien } from "react-icons/wi"

export const Footer = () => (
   <>

      <div className={styles.footer}>
         <div className={styles.boxContact}>
            <h3 className={styles.title}>
               Celular
            </h3>
            <p className={styles.subTitle}>
               (16) 98821-0069
            </p>
         </div>
         <div className={styles.boxContact}>
            <h3 className={styles.title}>
               Email
            </h3>
            <p className={styles.subTitle}>
               fransergiogj7@gmail.com
            </p>
         </div>
         <div className={styles.boxContact}>
            <WiAlien size={"30px"} className={styles.titleAlien}/>
            <p className={styles.subTitle}>Feito por Fran Inovando projetos.</p>
         </div>
      </div>
   </>
);