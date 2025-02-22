import { useEffect, useState } from "react";
import styles from "./WeatherImageAnimated.module.css";
import {
  getWeatherImage,
  getAnimatedWeatherImage,
  getWeatherDescription,
} from "../../utils/helpers.js";

export function WeatherImageAnimated({ code }) {
  const [imgSrc, setImgSrc] = useState(getWeatherImage(code));

  useEffect(() => {
    setImgSrc(getWeatherImage(code));
    const img = new Image();
    img.onload = () => setImgSrc(getAnimatedWeatherImage(code));
    img.src = getAnimatedWeatherImage(code);
  }, [code]);

  return (
    <img
      className={styles.image}
      src={imgSrc}
      alt={getWeatherDescription(code)}
    />
  );
}
