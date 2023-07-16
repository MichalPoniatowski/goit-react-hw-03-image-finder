import './SearchBar.css';

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
