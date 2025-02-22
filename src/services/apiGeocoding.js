export async function getGeocoding(cityName) {
  if (!cityName || cityName.length < 2) return null;

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=50&format=json`
  );
  const data = await response.json();

  if (!data.results) {
    return null;
  } else {
    return data.results;
  }
}
