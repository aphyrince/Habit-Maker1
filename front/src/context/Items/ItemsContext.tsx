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
    const [items, setItems] = useState<Items>([]);
    const create = (item: ItemData) => {
        item.key = Date();
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

export const useItems = () => useContext(ItemsContext);
