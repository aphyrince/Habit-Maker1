import { createContext, useContext, useState, ReactNode } from "react";

type Mode = "none" | "create" | "setting" | "dashboard";
type ModeContextType = {
    mode: Mode;
    changeMode: (mode: Mode) => void;
};

const ModeContext = createContext<ModeContextType | null>(null);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<Mode>("none");
    const changeMode = (mode: Mode) => {
        setMode(mode);
    };
    return (
        <ModeContext.Provider value={{ mode, changeMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext) as ModeContextType;
