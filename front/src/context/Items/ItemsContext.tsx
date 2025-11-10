import { createContext, useContext, useState, ReactNode } from "react";
import { ItemData } from "../../utils/types";

type Items = ItemData[];
type ItemsContextType = {
    items: Items;
    create: (item: ItemData) => void;
    read: (key: string) => ItemData | undefined;
    readAll: () => ItemData[];
    update: (item: ItemData) => void;
    remove: (key: string) => void;
};

const ItemsContext = createContext<ItemsContextType | null>(null);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
    const sampleItem: ItemData = {
        key: "habit1",
        isChecked: true,
        isFocused: false,
        text: "아침 스트레칭",
        bgColor: "#FFD700",
        fontColor: "#222222",
        logList: ["2025-11-01", "2025-11-02", "2025-11-05"],
        comment: "꾸준히 하면 허리가 덜 아파짐!",
    };
    const [items, setItems] = useState<Items>([sampleItem]);
    const create = (item: ItemData) => {
        setItems((prev) => [...prev, item]);
    };
    const read = (key: string) => {
        return items.find((item) => item.key === key);
    };
    const readAll = () => {
        return items;
    };
    const update = (updatedItem: ItemData) => {
        setItems([
            ...items.map((item) =>
                item.key === updatedItem.key ? updatedItem : item
            ),
        ]);
    };
    const remove = (key: string) => {
        setItems([...items.filter((items) => items.key !== key)]);
    };

    return (
        <ItemsContext.Provider
            value={{
                items,
                create,
                read,
                readAll,
                update,
                remove,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

export const useItems = () => useContext(ItemsContext) as ItemsContextType;
