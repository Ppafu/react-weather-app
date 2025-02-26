import "./App.css";
import { useEffect, useRef, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CityNameProvider } from "./contexts/CityNameContext";
import { DayProvider } from "./contexts/DayContext";

import SearchButton from "./components/SearchButton/SearchButton";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import Footer from "./components/Footer/Footer";
import AppLayout from "./ui/AppLayout/AppLayout";

const queryClient = new QueryClient();
{
  /* <Route path=`${cityName}`element={<AppLayout/> } /> */
}

function App() {
  const [cityCoords, setCityCoords] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const searchBtn = document.getElementById("searchButton");
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
            <SearchButton
              onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
              onClick={() => setIsOpen(true)}
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
