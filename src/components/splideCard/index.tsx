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
            <h4 className={styles.date}>01/2022</h4>
            <p className={styles.description}>Inicio da jornada Programador Javascript FullStack</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>02/2022</h4>
            <p className={styles.description}>Práticas básica com HTML CSS</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>03/2022</h4>
            <p className={styles.description}>Lógica de programação com Javascript</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>04/2022</h4>
            <p className={styles.description}>Ferramenata de versionamento Git e GitHub</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>05/2022</h4>
            <p className={styles.description}>Avançando em  Front Bootstrap SCSS React e conexão com Api</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>06/2022</h4>
            <p className={styles.description}>Avançando com linguagem tipada Typescript</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>07/2022</h4>
            <p className={styles.description}>Inicio de Freelancer e Projetos próprios</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>08/2022</h4>
            <p className={styles.description}>Criação de Api completa com Sequelize Node.js</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>08/2022</h4>
            <p className={styles.description}>Método Scrum UX/UI Gitflow</p>
          </div>
        </SplideSlide>

        <SplideSlide>
        <div className={styles.card} >
            <h4 className={styles.date}>09/2022</h4>
            <p className={styles.description}>Docker Testes Unitários e Design patterns</p>
          </div>
        </SplideSlide>


       






      </Splide>

     )
   
} 