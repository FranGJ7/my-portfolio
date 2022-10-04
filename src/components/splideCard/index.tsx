import styles from "./styles.module.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';



export const SplideCards = () =>{
   

     return(
        <Splide 
        options={ {
            perPage:4,
            arrows:false,
            
          } }
        aria-label="My Favorite Images">

       
        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>2022</h4>
            <p className={styles.description}>Inicio da jornada</p>
          </div>
        </SplideSlide>
       






      </Splide>

     )
   
} 