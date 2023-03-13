import styles from "./styles.module.scss"
import Card from "./card" 
import { CardsInfoWeb } from "../../../constants"



export const CardProjects = () => {

  const cards = CardsInfoWeb

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