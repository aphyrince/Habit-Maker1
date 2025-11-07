import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ItemsProvider } from "./context/Items/ItemsContext";
import { ModeProvider } from "./context/Mode/ModeContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ItemsProvider>
            <ModeProvider>
                <App />
            </ModeProvider>
        </ItemsProvider>
    </React.StrictMode>
);
