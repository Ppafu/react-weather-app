import styles from "./RowWithIcon.module.css";

function RowWithIcon({ children, content }) {
  return (
    <div className={`${styles.rowIcon}  ${styles[content]}`}>{children}</div>
  );
}

export default RowWithIcon;
