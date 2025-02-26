import { X } from "@phosphor-icons/react/dist/ssr";
import styles from "./SearchField.module.css";
import { useCityName } from "../../contexts/CityNameContext";
import ButtonIcon from "../../ui/ButtonIcon/ButtonIcon";

function SearchField({ setIsOpen }) {
  const { cityName, setCityName } = useCityName();

  function handleInputChange(e) {
    const input = e.target.value;
    const isValidInput = /^[a-zA-Za-яА-ЯЁё\s\-/']*$/.test(input);
    if (isValidInput) {
      setCityName(input);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Escape") {
      setCityName("");
    }
  }

  return (
    <div className={styles.searchField}>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        name="search"
      />
      <div className={styles.clearButton}>
        <ButtonIcon
          onClick={() => {
            setIsOpen(false);
            setCityName("");
          }}
          id={"clearButton"}
          disabled={false}>
          <X />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default SearchField;
