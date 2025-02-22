import { useState } from "react";
import { useGeocoding } from "./useGeocoding";

export function useSearch() {
  const [cityList, setCityList] = useState([]);
  const { geocoding, geocodingError, isPendingGeocoding } =
    useGeocoding(cityName);
}
