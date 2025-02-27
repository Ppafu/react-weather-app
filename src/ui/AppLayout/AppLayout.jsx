import styles from "./AppLayout.module.css";

function AppLayout({ children }) {
  return <div className={styles.containerAppLayout}>{children}</div>;
}

export default AppLayout;
