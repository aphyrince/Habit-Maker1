import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ItemList from "./ItemList/ItemList";
import Modal from "./Modal/Modal";
import { ItemData, ModalMode } from "./utils/types";

const App = () => {
    const [modalMode, setModalMode] = useState<ModalMode>(ModalMode.None);
    const [focusedItem, setFocusedItem] = useState<ItemData | null>(null);

    const onAdd = () => {
        setModalMode(ModalMode.Add);
    };
    const onSetting = () => {
        setModalMode(ModalMode.Setting);
    };
    const onItemClick = (targetItem: ItemData) => {
        setFocusedItem(targetItem);
        setModalMode(ModalMode.DashBoard);
    };
    const onModalClose = () => {
        setModalMode(ModalMode.None);
    };

    return (
        <div className="page">
            <Header onAdd={onAdd} onSetting={onSetting} />
            <Modal
                modalMode={modalMode}
                onModalClose={onModalClose}
                focusedItem={focusedItem}
            />
            <ItemList onItemClick={onItemClick} />
            <Footer />
        </div>
    );
};

export default App;
