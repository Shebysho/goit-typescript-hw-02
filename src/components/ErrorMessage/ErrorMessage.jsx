import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return <div className={styles.errorMessage}>{message}</div>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};