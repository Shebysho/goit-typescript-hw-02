import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

export default function ImageModal({ image, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};