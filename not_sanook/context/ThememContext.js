"use client";

import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
   

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
    <ThemeContext.Provider value={{ toggle }}>
        {children}
    </ThemeContext.Provider>
    );
};