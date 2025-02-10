import React from 'react';
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

interface ImageUrls {
  regular: string;
}

interface Image {
  urls: ImageUrls;
  alt_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;