import { createContext, useState } from "react";

const appContext = createContext(null);

function AppContextProvider({ children }) {
    const [w, setW] = useState(2);

    return (
        <appContext.Provider value={{ w, setW }}>
            {children}
        </appContext.Provider>
    );
}

export default AppContextProvider;