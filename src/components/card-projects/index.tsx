import styles from "./styles.module.scss"
import Card from "./card" 
import {CardsInfo} from "../../../constants"


export const CardProjects = () => {
  const cards = CardsInfo

  return (
    <>
      <div className={styles.container}>
      {cards.map((card) =>(
                  <Card
                  key={card.id}
                  image={card.image}  
                  title={card.title}
                  subTitle={card.subTitle} 
                  Alt={card.alt}
                  linkCode={card.linkCode}
                  linkSite={card.linkSite}
                  />
               ))}
      </div>
    </>
  );
} 