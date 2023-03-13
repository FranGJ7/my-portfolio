import styles from "./styles.module.scss"
import Image from "next/image";
import gitHubIcon from "../../../assets/icons/gitHub.png"
import expoIcon from "../../../assets/icons/iconExpo.png"
import googlePlay from "../../../assets/icons/google-play.png"
import appStore from "../../../assets/icons/app-store.png"
import close from "../../../assets/icons/close.png"
//modal
import { useState } from 'react';
import Modal from 'react-modal';

//modal
const customStyles = {
  overlay: {
    transition: 0.3,
    backgroundColor: "#000000cc"

  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#000000",
    borderRadius: 10,
    border: "solid #00bfff",
    width: 500,
    height: "50%"
  },
};


const Card = ({ image, title, subTitle, Alt, linkCode, qrExpo, linkExpo }) => {


  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }




  return (
    <div className={styles.cards}>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>

          <Image
            width={22}
            height={22}
            src={close} />

        </button>
        <Image src={qrExpo} />
        <p>{linkExpo}</p>

        <p>Download Expo Go</p>

        <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US&pli=1" target={"_blank"}>
          <Image
            width={40}
            height={40}
            src={googlePlay} />
        </a>

        <a href="https://apps.apple.com/br/app/expo-go/id982107779" target={"_blank"}>
          <Image
            width={40}
            height={40}
            src={appStore} />
        </a>
      </Modal> 
    
    
      <div className={styles.icons}>
        <a href={linkCode} target="blank">
          <button className={styles.linkIcon}><Image className={styles.linkIcon} width={20} height={20}  src={gitHubIcon} alt="Link para GitHub" /></button>
        </a>

        <button onClick={openModal} className={styles.linkIcon}><Image className={styles.linkIcon} width={20} height={20} src={expoIcon} alt="Link para Expo" /></button>

      </div>

      <div>
        <Image
          src={image}
          alt={Alt}
          layout="responsive"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.hr} />
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  
  )
};

export default Card



