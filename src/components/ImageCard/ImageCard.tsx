import React from 'react';
import styles from './ImageCard.module.css';

interface ImageUrls {
  small: string;
}

interface Image {
  urls: ImageUrls;
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.imageCardImage} />
    </div>
  );
};

export default ImageCard;