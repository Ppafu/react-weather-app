export function getWeatherImage(wmoCode) {
  const images = new Map([
    [[0], "/sun_3d.png"], //sunny
    [[1], "/sun_behind_small_cloud_3d.png"], //mostly sunny
    [[2], "/sun_behind_large_cloud_3d.png"], //barely sunny
    [[3], "/cloud_3d.png"], //cloudy
    [[45, 48], "/fog_3d.png"], //fog
    [[51, 56, 61, 66, 80], "/sun_behind_rain_cloud_3d.png"], //partly sunny with rain
    [[53, 55, 63, 65, 57, 67, 81, 82], "/cloud_with_rain_3d.png"], //rain and cloud
    [[71, 73, 75, 77, 85, 86], "/cloud_with_snow_3d.png"], //snow and cloud
    [[95], "/cloud_with_lightning_3d.png"], //lightning
    [[96, 99], "/cloud_with_lightning_and_rain_3d.png"], //thunder and rain
  ]);
  const arr = [...images.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return images.get(arr);
}

export function getAnimatedWeatherImage(wmoCode) {
  const images = new Map([
    [[0], "/sun-with-face_1f31e.png"], //sunny
    [[1], "/sun-behind-small-cloud_1f324-fe0f.png"], //mostly sunny
    [[2], "/sun-behind-cloud_26c5.png"], //barely sunny
    [[3], "/cloud_2601-fe0f.png"], //cloudy
    [[45, 48], "/fog_1f32b-fe0f.png"], //fog
    [[51, 56, 61, 66, 80], "/sun-behind-rain-cloud_1f326-fe0f.png"], //partly sunny with rain
    [[53, 55, 63, 65, 57, 67, 81, 82], "/cloud-with-rain_1f327-fe0f.png"], //rain and cloud
    [[71, 73, 75, 77, 85, 86], "/cloud-with-snow_1f328-fe0f.png"], //snow and cloud
    [[95], "/cloud-with-lightning_1f329-fe0f.png"], //lightning
    [[96, 99], "/cloud-with-lightning-and-rain_26c8-fe0f.png"], //thunder and rain
  ]);
  const arr = [...images.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return images.get(arr);
}

export function getWeatherDescription(weatherCode) {
  const descriptions = new Map([
    [[0], "Sunny"],
    [[1], "Mostly sunny"],
    [[2], "Mostly cloudy"],
    [[3], "Cloudy"],
    [[45, 48], "Fog"],
    [[51, 56, 61, 66, 80], "Drizzle"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "Rain"],
    [[71, 73, 75, 77, 85, 86], "Snow fall"],
    [[95], "Thunderstorm"],
    [[96, 99], "Thunderstorm with slight and heavy hail"],
  ]);
  const arr = [...descriptions.keys()].find((key) => key.includes(weatherCode));
  if (!arr) return "NOT FOUND";
  return descriptions.get(arr);
}

export function formatWeekDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(dateStr));
}

export function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(dateStr));
}

export function convertToFlag(countryCode) {
  if (!countryCode) return "";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function getWindDirection(degrees) {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round((degrees / 360) * 16);
  return directions[index % 16];
}
