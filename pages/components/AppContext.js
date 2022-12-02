import { createContext, useState } from "react";

export const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [workInput, setWorkInput] = useState(5);
  const [workDisplay, setWorkDisplay] = useState(0);

  const [restInput, setRestInput] = useState(3);
  const [restDisplay, setRestDisplay] = useState(0);

  const [intervalsInput, setIntervalsInput] = useState(2);
  const [intervalsDisplay, setIntervalsDisplay] = useState(1);

  const value = {
    workInput,
    setWorkInput,
    workDisplay,
    setWorkDisplay,
    restInput,
    setRestInput,
    restDisplay,
    setRestDisplay,
    intervalsInput,
    setIntervalsInput,
    intervalsDisplay,
    setIntervalsDisplay,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
