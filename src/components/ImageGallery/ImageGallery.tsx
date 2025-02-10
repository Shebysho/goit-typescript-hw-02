import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageUrls {
  small: string;
}

interface Image {
  id: string;
  urls: ImageUrls;
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;