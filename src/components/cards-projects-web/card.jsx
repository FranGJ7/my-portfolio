import styles from "./styles.module.scss"
import Image from "next/image";

const Card = ({ image, title, subTitle, Alt, linkCode, linkSite }) =>{
    return(
        <div className={styles.cards}>
        <div className={styles.imageCard}>
          <Image
            src={image}
            alt={Alt}
            width={400}
            height={218}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <hr className={styles.hr} />
        <p className={styles.subTitle}>{subTitle}</p>
        <a href={linkCode} target="blank">
          <button className={styles.button}>Code</button>
        </a>
        <a href={linkSite} target="blank">
          <button className={styles.button}>Site</button>
        </a>
       </div>
    )
}
export default Card



