import styles from "./AppLayout.module.css";

import { useCityName } from "../../contexts/CityNameContext";

function AppLayout({ children }) {
  const { setCityName } = useCityName();
  return (
    <div
      className={styles.containerAppLayout}
      onClick={() => setCityName("")}
      onKeyDown={(e) => e.key === "Escape" && setCityName("")}>
      {children}
    </div>
  );
}

export default AppLayout;
