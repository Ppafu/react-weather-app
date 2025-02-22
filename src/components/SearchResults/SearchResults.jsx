import { useMemo } from "react";
import { useDay } from "../../contexts/DayContext";
import { useGeocoding } from "../../hooks/useGeocoding";
import styles from "./SearchResults.module.css";

import CityItem from "../CityItem/CityItem";
import { useCityName } from "../../contexts/CityNameContext";
import { Spinner } from "../../ui/Spinner/Spinner";
import { City } from "@phosphor-icons/react";
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";

function SearchResults({ setCityCoords, setIsOpen }) {
  const { setIndex } = useDay();
  const { cityName } = useCityName();
  const isVertical = window.innerWidth < 1024;

  const {
    geocodingError,
    isPendingGeocoding,
    geocoding: cityList,
    isLoadingGeocoding,
  } = useGeocoding(cityName);

  const cityListMemo = useMemo(
    () =>
      cityList?.map((city, i) => (
        <CityItem
          key={i}
          city={city}
          i={i}
          onSelectCity={() => {
            setCityCoords(city);
            setIndex(0);
            isVertical && setIsOpen(false);
          }}
        />
      )),
    [cityList, setCityCoords, setIndex, isVertical, setIsOpen]
  );

  return !cityName ? (
    <div className={styles.cityIcon}>
      <City weight="fill" />
    </div>
  ) : (
    <>
      {(isLoadingGeocoding || isPendingGeocoding) && <Spinner />}
      {geocodingError && (
        <ErrorMessage
          message={geocodingError.message}
          onClick={() => window.location.reload()}
        />
      )}
      <ul className={`fade-in ${styles.list}`}>
        {!cityName ? null : cityListMemo}
      </ul>
    </>
  );
}

export default SearchResults;
