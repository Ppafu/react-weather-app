import { useContext, useState, createContext } from "react";

const DayContext = createContext(0);

function DayProvider({ children }) {
  const [index, setIndex] = useState(0);

  return (
    <DayContext.Provider value={{ index, setIndex }}>
      {children}
    </DayContext.Provider>
  );
}

function useDay() {
  const context = useContext(DayContext);
  if (context === undefined)
    throw new Error("useDay must be used within a DayProvider");
  return context;
}

export { DayProvider, useDay };
