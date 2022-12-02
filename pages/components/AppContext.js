import { createContext, useState } from "react";

export const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [w, setW] = useState(5);
  const [wDisplay, setWDisplay] = useState(0);

  const value = {
    w,
    setW,
    wDisplay,
    setWDisplay,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
