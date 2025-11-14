import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Modal from "./components/Modal/Modal";
import { useItems } from "./context/Items/ItemsContext";

const App = () => {
    const { items } = useItems();
    useEffect(() => {
        const load = async () => {
            const items = await window.store.read();
            console.log("loaded data : ", items);
        };
    }, [items]);

    return (
        <div className="page">
            <Header />
            <Modal />
            <ItemList />
            <Footer />
        </div>
    );
};

export default App;
