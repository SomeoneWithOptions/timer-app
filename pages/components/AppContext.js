import { createContext, useState } from "react";

export const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [workInput, setWorkInput] = useState(2);
  const [workDisplay, setWorkDisplay] = useState(2);

  const [restInput, setRestInput] = useState(3);
  const [restDisplay, setRestDisplay] = useState(3);

  const [intervalsInput, setIntervalsInput] = useState(4);
  const [intervalsDisplay, setIntervalsDisplay] = useState(4);

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
