import styles from "./WeatherDetails.module.css";

import { useDay } from "../../contexts/DayContext";
import { useCityData } from "../../hooks/useCityData";

import {
  formatDay,
  getWeatherDescription,
  getWindDirection,
} from "../../utils/helpers";

import { WeatherImageAnimated } from "../WeatherImageAnimated/WeatherImageAnimated";

import Section from "../../ui/Section/Section";
import RowWithIcon from "../../ui/RowWithIcon/RowWithIcon";
import {
  ArrowArcRight,
  Drop,
  MapPin,
  NavigationArrow,
  Sun,
  Wind,
} from "@phosphor-icons/react";

function WeatherDetails({ weather, cityCoords }) {
  const { index } = useDay();
  const { cityDataError, isPendingCityData, cityData } =
    useCityData(cityCoords);

  const { current, daily } = weather;
  const uv = daily.uv_index_max[index];
  const isToday = index === 0;
  const cityName = cityCoords.name ? cityCoords.name : cityData?.cityName;

  const cityCode = cityCoords.country_code
    ? cityCoords.country_code
    : cityData?.countryCode;

  let code, temperature, humidity, windSpeed, day, windDirection;

  day = isToday ? "Now" : formatDay(daily.time[index]);
  code = isToday ? current.weather_code : daily.weather_code[index];
  temperature = isToday ? (
    <span className={styles.temperatureNow}>{current.temperature_2m}&deg;</span>
  ) : (
    <>
      <span className={styles.temperatureMax}>
        {daily.temperature_2m_max[index]}&deg;
      </span>
      <span className={styles.temperatureMin}>
        {daily.temperature_2m_min[index]}&deg;
      </span>
    </>
  );
  humidity = isToday ? current.relative_humidity_2m : undefined;
  windSpeed = isToday
    ? current.wind_speed_10m
    : daily.wind_speed_10m_max[index];

  windDirection = isToday
    ? current.wind_direction_10m
    : daily.wind_direction_10m_dominant[index];

  return (
    <div className={styles.containerWeatherDetails}>
      <Section>
        <div className={styles.cityData}>
          <RowWithIcon content="center">
            <MapPin weight="fill" size={28} />
            <span>
              {cityName} {cityCode}
            </span>
          </RowWithIcon>
        </div>
        <div className={styles.tempAndDescription}>
          <div className={styles.temperature}>{temperature}</div>
          <span>{getWeatherDescription(code)}</span>
        </div>
      </Section>

      <Section>
        <span className={styles.day}>{day}</span>
        <WeatherImageAnimated code={code} />
      </Section>

      <Section>
        <div className={styles.weatherData}>
          <RowWithIcon content="start">
            <Wind weight="bold" />
            <span className="wind-data">Wind: {windSpeed} km/h</span>
          </RowWithIcon>
          <RowWithIcon content="start">
            <NavigationArrow
              weight="fill"
              style={{
                transform: `rotate(${windDirection - 135}deg)`,
              }}
            />
            <span>Dir.: </span>
            <span className={styles.windDirection}>
              {getWindDirection(windDirection)}
            </span>
            <span className={styles.windDirection}>{windDirection}</span>
          </RowWithIcon>
          <RowWithIcon content="start">
            <Sun weight="fill" />

            <span className="uv-data">UV: {uv}</span>
          </RowWithIcon>

          {humidity && (
            <RowWithIcon content="start">
              <Drop weight="fill" />

              <span className="humidity-data">Humidity: {humidity}</span>
            </RowWithIcon>
          )}
        </div>
      </Section>
    </div>
  );
}

export default WeatherDetails;
