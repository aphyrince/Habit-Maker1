import { ItemData } from "./utils/types";

export {};

declare global {
    interface Window {
        store: {
            read: () => Promise<ItemData[]>;
            save: (data: ItemData[]) => Promise<boolean>;
        };
    }
}
