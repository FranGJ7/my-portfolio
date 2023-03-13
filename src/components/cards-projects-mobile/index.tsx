import styles from "./styles.module.scss"
import Card from "./card"
import { CardsInfoMobile } from "../../../constants"
import { Splide, SplideSlide } from '@splidejs/react-splide';


export const CardProjects = () => {

  const cards = CardsInfoMobile


  return (
    <>
      <div className={styles.container}>
        <Splide aria-label="My Favorite Images"
          options={{
            pagination: false,
            perPage: 4,
            gap:15,
            arrows: true,
            breakpoints: {
              1100: {
                perPage: 3,
              },
              850: {
                perPage: 2,
              },
              775: {
                width:400,
                perPage: 1,
              },
              430: {
                width:296,
                perPage: 1,
              },
            },
          }}
        >

          {cards.map((card) => (
            <SplideSlide>
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                subTitle={card.subTitle}
                Alt={card.alt}
                linkCode={card.linkCode}
                qrExpo={card.qrExpo}
                linkExpo={card.linkExpo}
              />
            </SplideSlide>
          ))}
 
        </Splide>
      </div>
    </>
  );
} 