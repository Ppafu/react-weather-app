import { useQuery } from "@tanstack/react-query";
import { getCityData } from "../services/apiCityData";

export function useCityData(coords) {
  const {
    isPending: isPendingCityData,
    data: cityData,
    error: cityDataError,
  } = useQuery({
    queryKey: ["cityData", coords],
    queryFn: () => getCityData(coords),
    retry: false,
    enabled: !!coords.latitude && !!coords.longitude,
  });

  return { cityDataError, isPendingCityData, cityData };
}
