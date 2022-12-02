import { createContext, useState } from "react";

export const AppContext = createContext(null);

function AppContextProvider(props) {
  const [w, setW] = useState(2);
  const [wDisplay, setWDisplay] = useState(0);

  const value = {
    w,
    setW,
    wDisplay,
    setWDisplay,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;
