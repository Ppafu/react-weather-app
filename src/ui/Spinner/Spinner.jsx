import { CircleNotch } from "@phosphor-icons/react";
import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <CircleNotch />
    </div>
  );
}
