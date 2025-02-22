import styles from "./ButtonIcon.module.css";

function ButtonIcon({ children, onClick }) {
  return (
    <button className={styles.buttonIcon} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonIcon;
