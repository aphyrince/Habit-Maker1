import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
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

    const saveData = (data: ItemData[]) => {
        window.store.save(data);
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await window.store.read();
            setItems(result);
        };
        fetchData();
    }, []);

    const create = (item: ItemData) => {
        setItems((prev) => {
            const newItems = [...prev, item];
            saveData(newItems);
            return newItems;
        });
    };

    const read = (key: string) => {
        return items.find((item) => item.key === key);
    };
    const readAll = () => {
        return items;
    };
    const update = (updatedItem: ItemData) => {
        setItems((prev) => {
            const newItems = prev.map((item) =>
                item.key === updatedItem.key ? updatedItem : item
            );
            saveData(newItems);
            return newItems;
        });
    };
    const remove = (key: string) => {
        setItems((prev) => {
            const newItems = prev.filter((item) => item.key !== key);
            saveData(newItems);
            return newItems;
        });
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
