import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={styles.searchFormButton}>
          Search
        </button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};