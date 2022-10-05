import styles from "./styles.module.scss";
import { GrInstagram, GrGithub } from "react-icons/gr"
import { ImLinkedin } from "react-icons/im"
import { TbWorld } from "react-icons/tb"
import Link from "next/link";

export const Header = () => (
   <>
      <div id="start" className={styles.header}>

         <div className={styles.portifolioIcon}>
            <p className={styles.linksHeader}> <TbWorld/> Portifólio</p>
         </div>

         
         <div className={styles.boxLinks}>
         <Link href="#projects">
            <p className={styles.linksHeader}>Projetos</p>
         </Link>
         <Link href="#tech">
            <p className={styles.linksHeader}>Tecnologias</p>
         </Link>
         <Link href="#about">
            <p className={styles.linksHeader}>Sobre</p>
         </Link>
         </div>
         


         <div className={styles.socialIcons}>
         <a href="https://github.com/FranGJ7" target="_blank">
            <GrGithub size='1.9rem'/>
         </a>
         <a href="https://www.linkedin.com/in/fran-gj/" target="_blank">
            <ImLinkedin size='1.7rem'/>
         </a>
         <a href="https://www.instagram.com/fransergioclt7/" target="_blank">
         <GrInstagram size='1.7rem'/>
         </a>
         </div>

      </div>
   </>
);

