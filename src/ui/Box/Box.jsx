import styles from "./Box.module.css";

function Box({ children }) {
  return <main className={styles.box}>{children}</main>;
}

export default Box;
