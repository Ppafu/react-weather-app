import styles from "./ButtonIcon.module.css";

function ButtonIcon({ children, onClick, id, disabled }) {
  return (
    <button
      className={styles.buttonIcon}
      onClick={onClick}
      id={id}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonIcon;
