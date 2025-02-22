export async function getCityData(coords) {
  if (!coords.latitude || !coords.longitude) return null;
  const { latitude, longitude } = coords;

  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=13`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const countryCode = data.address.country_code.toUpperCase();
  const cityName = data.address.city
    ? data.address.city
    : data.address.county || "";

  return { countryCode, cityName };
}
