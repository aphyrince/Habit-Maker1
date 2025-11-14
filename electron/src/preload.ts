import { contextBridge, ipcRenderer } from "electron";
import { ItemData } from "./types";

contextBridge.exposeInMainWorld("store", {
    read: (): Promise<ItemData[]> => {
        console.log("PRELOAD read() CALLED");
        return ipcRenderer.invoke("read-data");
    },
    save: (data: ItemData[]): Promise<boolean> => {
        console.log("PRELOAD save() CALLED WITH:", data);
        return ipcRenderer.invoke("save-data", data);
    },
});
