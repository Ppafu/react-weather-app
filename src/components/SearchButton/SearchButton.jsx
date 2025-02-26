import styles from "./SearchButton.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import ButtonIcon from "../../ui/ButtonIcon/ButtonIcon";

function SearchButton({ onClick, isOpen }) {
  return (
    <div className={`${styles.searchButton} ${isOpen ? styles.hidden : ""}`}>
      <ButtonIcon onClick={onClick} tabIndex={0} id={"searchButton"}>
        <MagnifyingGlass />
      </ButtonIcon>
    </div>
  );
}

export default SearchButton;
