import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};