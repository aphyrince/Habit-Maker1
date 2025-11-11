import { createContext, ReactNode, useContext, useState } from "react";
import { ItemData } from "../../utils/types";

type SelectContextType = {
    selected: ItemData | null;
    setSelected: (item: ItemData | null) => void;
};

const SelectContext = createContext<SelectContextType | null>(null);

export const SelectProvider = ({ children }: { children: ReactNode }) => {
    const [selected, setSelected] = useState<ItemData | null>(null);

    return (
        <SelectContext.Provider value={{ selected, setSelected }}>
            {children}
        </SelectContext.Provider>
    );
};

export const useSelect = () => useContext(SelectContext) as SelectContextType;
