import { useDay } from "../../contexts/DayContext";
import {
  formatDay,
  formatWeekDay,
  getWeatherDescription,
  getWeatherImage,
} from "../../utils/helpers";

import styles from "./WeeklyWeatherItem.module.css";

function WeeklyWeatherItem({ day, dayIndex, weather }) {
  const { setIndex } = useDay();
  if (!weather) return null;

  const isToday = dayIndex === 0;

  const { temperature_2m_max, weather_code } = weather.daily;
  const temperature = temperature_2m_max[dayIndex];

  const code = isToday ? weather.current.weather_code : weather_code[dayIndex];
  const dayLabel = formatWeekDay(day);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setIndex(dayIndex);
    }
  }

  return (
    <li
      className={styles.item}
      onClick={() => setIndex(dayIndex)}
      onKeyDown={handleKeyPress}
      tabIndex="0">
      <span>{dayLabel}</span>
      <time dateTime={day} className={styles.time}>
        {formatDay(day)}
      </time>
      <img src={getWeatherImage(code)} alt={getWeatherDescription(code)} />
      <span className={styles.temperature}>{temperature}&deg;</span>
    </li>
  );
}

export default WeeklyWeatherItem;
