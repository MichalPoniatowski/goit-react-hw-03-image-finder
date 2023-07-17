import React from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({ getQuery }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={getQuery}>
        <button type="submit" className={css['SearchForm-button']}>
          <span className={css['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
        />
      </form>
    </header>
  );
};
