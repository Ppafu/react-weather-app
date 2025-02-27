import styles from "./ToggleButton.module.css";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import ButtonIcon from "../../ui/ButtonIcon/ButtonIcon";

function ToggleButton({ onClick, isOpen }) {
  return (
    <div
      className={`${styles.toggleButton} ${
        isOpen ? styles.opened : styles.closed
      }
      }`}>
      <ButtonIcon onClick={onClick} tabIndex={0} id={"toggleButton"}>
        {isOpen ? <X /> : <MagnifyingGlass />}
      </ButtonIcon>
    </div>
  );
}

export default ToggleButton;
