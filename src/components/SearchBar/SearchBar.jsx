// import css from './SearchBar.module.css';

export const SearchBar = ({ getQuery }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={getQuery}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
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

// export const SearchBar = ({ getQuery }) => {
//   return (
//     <header className={css.searchbar}>
//       <form className={css.form} onSubmit={getQuery}>
//         <button type="submit" className={css.button}>
//           <span className={css['button-label']}>Search</span>
//         </button>

//         <input
//           className={css.input}
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };
