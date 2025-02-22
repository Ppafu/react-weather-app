import { useState, useEffect } from "react";

function useUserPosition() {
  const [userPosition, setUserPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setUserPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          }),
        () =>
          setUserPosition({
            latitude: 48.85341,
            longitude: 2.3488,
            timezone: "Europe/Paris",
          })
      );
    }
  }, []);

  return { userPosition, error };
}

export default useUserPosition;
