import styles from "./styles.module.scss"
import Image from "next/image";


export const CardProjects = () => {


  return (
    <>
      <div className={styles.container}>





        <div className={styles.cards}>

          <div className={styles.imageCard}>
            <Image
              src="/siteshowcase.gif"
              alt="capa site EAD"
              width={400}
              height={218}
            />
          </div>

          <h3 className={styles.title}>NFT Marketplace</h3>
          <hr className={styles.hr} />
          <p className={styles.subTitle}>LandingPage para divulgar App Mobile De NFT, lá você pode dar lances, curtir e ver detalhes de cada NFT.</p>

          <a href={"https://github.com/FranGJ7/showcase-nftapp"} target="blank">
            <button className={styles.button}>Code</button>
          </a>
          <a href={"https://nft-marketplace-project1.netlify.app/"} target="blank">
          <button className={styles.button}>Site</button>
          </a>
        </div>





















        <div className={styles.cards}>

          <div className={styles.imageCard}>
            <Image
              src="/homeOBC.png"
              alt="capa site EAD"
              width={400}
              height={218}
            />
          </div>

          <h3 className={styles.title}>EAD OBC</h3>
          <hr className={styles.hr} />
          <p className={styles.subTitle}>Site de cursos online, onde alunos tem que se cadastrar para ter acesso aos cursos com opção de adicionar favoritos curtir e alterar dados da conta.</p>

          <a href={"https://github.com/FranGJ7/site-ead-front-end"} target="blank">
            <button className={styles.button}>Code</button>
          </a>
          <button className={styles.button}>Site</button>
        </div>


        <div className={styles.cards}>
          <div className={styles.imageCard}>
            <Image
              src="/siteimusicplay.png"
              alt="Capa site ImusicPlay"
              width={400}
              height={218}
            />
          </div>
          <h3 className={styles.title}>MusicPlay</h3>
          <hr className={styles.hr} />
          <p className={styles.subTitle}>Site de música baseado no Spotify onde usúario pode escutar suas músicas e até acompanhar letras, sugestão de música que combina com seu gosto e região</p>
          <a href={"https://github.com/FranGJ7/site-music"} target="blank">
            <button className={styles.button}>Code</button>
          </a>
          <a href={"https://imusicplayapp.netlify.app/"} target="blank">
            <button className={styles.button}>Site</button>
          </a>
        </div>

        <div className={styles.cards}>
          <div className={styles.imageCard}>
            <Image
              src="/ecommerceblack.png"
              alt="Capa site ImusicPlay"
              width={400}
              height={218}
            />
          </div>
          <h3 className={styles.title}>E-commerce Black</h3>
          <hr className={styles.hr} />
          <p className={styles.subTitle}>Pequeno E-commerce onde usuário pode ver detalhes do produto adicionar ao carrinho quantos produtos desejar onde vai ser somado o valor e direcionado para finalizar compra.</p>
          <a href={"https://github.com/FranGJ7/next-store-black"} target="blank">
            <button className={styles.button}>Code</button>
          </a>
          <a href={"https://next-store-black.vercel.app/"} target="blank">
            <button className={styles.button}>Site</button>
          </a>
        </div>

        <div className={styles.cards}>
          <div className={styles.imageCard}>
            <Image
              src="/sitefilmes.png"
              alt="Capa site ImusicPlay"
              width={400}
              height={218}
            />
          </div>
          <h3 className={styles.title}>Site de Filme</h3>
          <hr className={styles.hr} />
          <p className={styles.subTitle}>Site de informações sobre filme onde encontra Top 20 melhores, busca  especifica ou por gêneros, encontra avaliação dos filmes ano de lançamento e sinopse. </p>
          <a href={"https://github.com/FranGJ7/site-sobre-filmes"} target="blank">
            <button className={styles.button}>Code</button>
          </a>
          <a href={"https://siteaboutmovie.netlify.app/"} target="blank">
            <button className={styles.button}>Site</button>
          </a>
        </div>


        <div className={styles.cards}>
          <div className={styles.imageCard}>
            <Image
              src="/sportmax.png"
              alt="Capa site ImusicPlay"
              width={400}
              height={218}
            />
          </div>
          <h3 className={styles.title}>Site SportMax</h3>
          <hr className={styles.hr} />
          <p className={styles.subTitle}>Projeto criado no inicio para aprender responsividade bem básico apenas com HTML e CSS com site de esporte fictício.</p>
          <a href={"https://github.com/FranGJ7/Projeto-responsivo-css"} target="blank">
            <button className={styles.button}>Code</button>
          </a>
          <a href={"https://sportmax.netlify.app/"} target="blank">
            <button className={styles.button}>Site</button>
          </a>
        </div>

      </div>
    </>

  );
}