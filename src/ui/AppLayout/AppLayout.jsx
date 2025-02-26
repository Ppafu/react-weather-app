import styles from "./AppLayout.module.css";

import { useCityName } from "../../contexts/CityNameContext";

function AppLayout({ children }) {
  const { setCityName } = useCityName();
  return (
    <div className={styles.containerAppLayout} onClick={() => setCityName("")}>
      {children}
    </div>
  );
}

export default AppLayout;
