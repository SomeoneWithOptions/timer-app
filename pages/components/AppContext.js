import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [workInput, setWorkInput] = useState(3);

  return (
    <AppContext.Provider value={{ workInput, setWorkInput }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
