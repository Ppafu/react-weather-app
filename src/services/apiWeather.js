export async function getWeather(cityCoords) {
  const { latitude, longitude, timezone } = cityCoords;

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=${timezone}&format=json`
  );
  const data = await response.json();

  if (!data) return null;

  return data;
}
