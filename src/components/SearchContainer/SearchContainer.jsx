import SearchField from "../SearchField/SearchField";
import SearchResults from "../SearchResults/SearchResults";
import styles from "./SearchContainer.module.css";

function Search({ setCityCoords, isOpen, setIsOpen }) {
  return (
    <aside
      className={`${styles.SearchContainer} ${
        isOpen ? "active" : styles.hidden
      }`}>
      <SearchField />
      <SearchResults setCityCoords={setCityCoords} setIsOpen={setIsOpen} />
    </aside>
  );
}

export default Search;
