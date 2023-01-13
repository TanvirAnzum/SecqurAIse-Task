import { createContext, useState } from "react";

export const GenderContext = createContext();

export const GenderProvider = ({ children }) => {
  const [genderData, setGenderData] = useState({
    male: 0,
    female: 0,
  });

  return (
    <GenderContext.Provider value={{ genderData, setGenderData }}>
      {children}
    </GenderContext.Provider>
  );
};
