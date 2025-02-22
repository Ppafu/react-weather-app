import ReactCountryFlag from "react-country-flag";
import styles from "./CityItem.module.css";

function CityItem({ city, i, onSelectCity }) {
  return (
    <li
      key={i}
      className={styles.item}
      onClick={() => onSelectCity(i)}
      onKeyDown={(e) => e.key === "Enter" && onSelectCity(i)}
      tabIndex="0">
      <div className={styles.flagName}>
        <ReactCountryFlag
          countryCode={city.country_code ? city.country_code : ""}
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title={city.country_code}
        />
        <b>{city.name}</b>
        <span>{city.admin1}</span>
      </div>

      <span className={styles.country}>{city.country}</span>
    </li>
  );
}

export default CityItem;
