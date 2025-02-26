import styles from "./ButtonIcon.module.css";

function ButtonIcon({ children, onClick, id }) {
  return (
    <button className={styles.buttonIcon} onClick={onClick} id={id}>
      {children}
    </button>
  );
}

export default ButtonIcon;
