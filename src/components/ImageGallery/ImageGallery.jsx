import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ children }) {
  return <ul className={styles.imageGallery}>{children}</ul>;
}

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};