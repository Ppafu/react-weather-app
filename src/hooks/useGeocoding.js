import { useQuery } from "@tanstack/react-query";
import { getGeocoding } from "../services/apiGeocoding";

export function useGeocoding(cityName) {
  // TODO:
  // const { cityName } = useParam();
  const {
    isPending: isPendingGeocoding,
    data: geocoding,
    error: geocodingError,
    isLoading: isLoadingGeocoding,
  } = useQuery({
    queryKey: ["geocoding", cityName],
    queryFn: () => getGeocoding(cityName),
    retry: false,
    enabled: !!cityName,
  });

  return { geocodingError, isPendingGeocoding, geocoding, isLoadingGeocoding };
}
