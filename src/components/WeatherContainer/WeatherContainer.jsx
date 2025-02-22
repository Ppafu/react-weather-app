import { useEffect } from "react";

import useUserPosition from "../../hooks/useUserPosition";
import { useWeather } from "../../hooks/useWeather";

import styles from "./WeatherContainer.module.css";

import WeatherDetails from "../WeatherDetails/WeatherDetails";
import WeatherWeekly from "../WeatherWeekly/WeatherWeekly";

import { Spinner } from "../../ui/Spinner/Spinner";
import Box from "../../ui/Box/Box";
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";

function WeatherBox({ cityCoords, setCityCoords }) {
  const { userPosition, error } = useUserPosition();
  const { errorWeather, isPendingWeather, weather, isLoadingWeather } =
    useWeather(cityCoords);

  useEffect(() => {
    setCityCoords(userPosition);
  }, [setCityCoords, userPosition]);

  return (
    <Box>
      {errorWeather && <ErrorMessage message={errorWeather.message} />}
      {error && <ErrorMessage message={error.message} />}
      {isPendingWeather || isLoadingWeather ? (
        <Spinner />
      ) : (
        <div className={`fade-in ${styles.weatherContainer}`}>
          <>
            <WeatherDetails weather={weather} cityCoords={cityCoords} />
            <WeatherWeekly weather={weather} />
          </>
        </div>
      )}
    </Box>
  );
}

export default WeatherBox;
