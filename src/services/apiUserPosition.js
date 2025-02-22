function getPosition() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          coords: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
        });
      },
      () => {
        resolve({
          coords: {
            latitude: 48.85341,
            longitude: 2.3488,
            timezone: "Europe/Paris",
          },
        });
      }
    );
  });
}
export async function getUserPosition() {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by your browser");
  }
  const position = await getPosition();
  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    timezone: position.coords.timezone,
  };
}
