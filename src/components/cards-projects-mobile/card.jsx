import styles from "./styles.module.scss"
import Image from "next/image";
import gitHubIcon from "../../../assets/icons/gitHub.png"
import expoIcon from "../../../assets/icons/iconExpo.png"
import close from "../../../assets/icons/close.png"
//modal
import { useState } from 'react';
import Modal from 'react-modal';

//modal
const customStyles = {
  overlay: {
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
  },
  modalContainer: {
    color: "white",
    display: "flex",
    flexDirection: "column"
  },
  modalButton: {
    backgroundColor: "black",
    textAlign: "end",
    cursor: "pointer",
    border: "none"
  },
  link:{
     margin:10
  },
  downloadExpo:{
    margin:10,
   
  }
};


const Card = ({ image, title, subTitle, Alt, linkCode, qrExpo, linkExpo }) => {


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className={styles.cards}>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={customStyles.modalContainer}>


          <button
            style={customStyles.modalButton}
            onClick={closeModal}>
            <Image
              width={22}
              height={22}
              src={close} />
          </button>

          <h2>{title}</h2>

          <br />

          <Image
            width={350}
            height={350}
            src={qrExpo} />
            
          <p style={customStyles.link}>{linkExpo}</p>
        </div>

      </Modal>



      <div className={styles.icons}>
        <a href={linkCode} target="blank">
          <button
            className={styles.linkIcon}>
            <Image
              className={styles.linkIcon}
              width={20}
              height={20}
              src={gitHubIcon}
              alt="Link para GitHub" /></button>
        </a>

        <button
          onClick={openModal}
          className={styles.linkIcon}>
          <Image
            className={styles.linkIcon}
            width={20}
            height={20}
            src={expoIcon}
            alt="Link para Expo" />
        </button>

      </div>
      <Image
        src={image}
        alt={Alt}
        layout="responsive"
      />

      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.hr} />
      <p className={styles.subTitle}>{subTitle}</p>
    </div>

  )
};

export default Card



