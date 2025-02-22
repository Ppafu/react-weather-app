import { useContext, useState, createContext } from "react";

const CityNameContext = createContext();

const CityNameProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");

  return (
    <CityNameContext.Provider value={{ cityName, setCityName }}>
      {children}
    </CityNameContext.Provider>
  );
};

function useCityName() {
  const context = useContext(CityNameContext);
  if (context === undefined)
    throw new Error("useCityName must be used within a CityNameProvider");
  return context;
}

export { CityNameProvider, useCityName };
