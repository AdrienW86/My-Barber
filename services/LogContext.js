'use client';

import { createContext, useContext, useState } from "react";

const LogContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [log, setLog] = useState(false);

    return (
        <ThemeContext.Provider value={{ log, setLog }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useLogContext = () => useContext(LogContext);