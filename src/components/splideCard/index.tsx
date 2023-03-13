import styles from "./styles.module.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';


export const SplideCards = () => {

  return (
    <Splide
      options={{
        pagination: false,
        perPage: 7,
        arrows: true,
        height: 150,
        breakpoints: {
          1900: {
            perPage: 5,
          },
          1500: {
            perPage: 4,
          },
          1200: {
            perPage: 3,
          },
          730: {
            width:400,
            perPage: 2,
          },
          500: {
            width:240,
            perPage: 1,
          },
        },
      }}
    >

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>01/2022</h4>
          <p className={styles.description}>Inicio da jornada Desenvolvedor Javascript FullStack</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>02/2022</h4>
          <p className={styles.description}>HTML5 <br /> CSS3 <br /> SCSS </p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>03/2022</h4>
          <p className={styles.description}>Lógica de programação <br /> com Javascript</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>04/2022</h4>
          <p className={styles.description}>Ferramenta de versionamento Git <br /> GitHub</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>05/2022</h4>
          <p className={styles.description}> Bootstrap <br /> React <br /> conexão com Api</p>
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
          <p className={styles.description}>Freelancer <br /> Projetos pessoais <br />Scrum</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>08/2022</h4>
          <p className={styles.description}>Api <br /> Sequelize <br /> Node.js</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>08/2022</h4>
          <p className={styles.description}>UX/UI <br />  Figma <br /> Gitflow <br /> Next.js</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>09/2022</h4>
          <p className={styles.description}>Docker <br /> Testes Unitários <br /> Design patterns</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>10/2022</h4>
          <p className={styles.description}>Angular <br />Analise e desenvolvimento de sistemas </p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>11/2022</h4>
          <p className={styles.description}>React-Native <br />Styled-Components CC50-Harvard </p>
        </div>
      </SplideSlide>


      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>12/2022</h4>
          <p className={styles.description}> Fim do 1°Semestre <br /> WebSocket <br />Jest</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.card} >
          <h4 className={styles.date}>01/2023</h4>
          <p className={styles.description}> AWS <br /> Expo</p>
        </div>
      </SplideSlide>



    </Splide>

  )

} 