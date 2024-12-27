import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.imageCardImage} />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};