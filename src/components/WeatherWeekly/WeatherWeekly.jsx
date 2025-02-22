import WeeklyWeatherItem from "../WeeklyWeatherItem/WeeklyWeatherItem";

import styles from "./WeatherWeekly.module.css";

function WeatherWeekly({ weather }) {
  if (!weather) return;
  return (
    <section
      className={styles.containerWeatherWeekly}
      aria-labelledby="weekly weather">
      <ul className={styles.list}>
        {weather.daily.time.map((day, i) => (
          <WeeklyWeatherItem key={i} day={day} dayIndex={i} weather={weather} />
        ))}
      </ul>
    </section>
  );
}

export default WeatherWeekly;
