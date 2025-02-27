import "./App.css";
import { useEffect, useRef, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CityNameProvider } from "./contexts/CityNameContext";
import { DayProvider } from "./contexts/DayContext";

import SearchContainer from "./components/SearchContainer/SearchContainer";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import Footer from "./components/Footer/Footer";
import AppLayout from "./ui/AppLayout/AppLayout";
import ToggleButton from "./components/ToggleButton/ToggleButton";

const queryClient = new QueryClient();
{
  /* <Route path=`${cityName}`element={<AppLayout/> } /> */
}

function App() {
  const [cityCoords, setCityCoords] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const searchBtn = document.getElementById("toggleButton");
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    if (!isOpen) {
      searchBtn.focus();
    }
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  return (
    <QueryClientProvider client={queryClient}>
      <DayProvider>
        <CityNameProvider>
          <AppLayout>
            <ToggleButton
              onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
            />

            <SearchContainer
              setCityCoords={setCityCoords}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />

            <WeatherContainer
              cityCoords={cityCoords}
              setCityCoords={setCityCoords}
            />
            <Footer />
          </AppLayout>
        </CityNameProvider>
      </DayProvider>
    </QueryClientProvider>
  );
}

export default App;
