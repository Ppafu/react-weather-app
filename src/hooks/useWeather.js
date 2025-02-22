import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/apiWeather";

export function useWeather(cityCoords) {
  const {
    isPending: isPendingWeather,
    data: weather,
    error: errorWeather,
    isLoading: isLoadingWeather,
  } = useQuery({
    queryKey: ["weather", cityCoords],
    queryFn: () => getWeather(cityCoords),
    retry: false,
    enabled:
      !!cityCoords.latitude && !!cityCoords.longitude && !!cityCoords.timezone,
  });

  return { errorWeather, isPendingWeather, isLoadingWeather, weather };
}
