import styles from "./SearchButton.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import ButtonIcon from "../../ui/ButtonIcon/ButtonIcon";

function SearchButton({ onClick, isOpen }) {
  return (
    <div
      className={`${styles.searchButton} ${isOpen ? styles.hidden : ""}`}
      tabIndex="0">
      <ButtonIcon onClick={onClick}>
        <MagnifyingGlass />
      </ButtonIcon>
    </div>
  );
}

export default SearchButton;
