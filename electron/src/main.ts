import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";
import fs from "fs";
import { ItemData } from "./types";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
    app.quit();
}

const dataPath = path.join(app.getPath("userData"), "data.json");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        mainWindow.loadFile(
            path.join(__dirname, "../../../front/build/index.html")
        );
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(
            path.join(process.resourcesPath, "build/index.html")
        );
    }
};

app.on("ready", () => {
    ipcMain.handle("read-data", async (): Promise<ItemData[]> => {
        try {
            if (!fs.existsSync(dataPath)) return [];
            const json = fs.readFileSync(dataPath, "utf8");
            return JSON.parse(json);
        } catch (error) {
            console.error(error);
            return [];
        }
    });
    ipcMain.handle("save-data", async (event, data: ItemData[]) => {
        console.log("SAVE DATA CALLED WITH:", data);
        try {
            if (data === undefined) {
                console.error("ERROR: DATA IS UNDEFINED!!!");
            }
            fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
            return true;
        } catch (error) {
            console.error("WRITE ERROR:", error);
            return false;
        }
    });
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
