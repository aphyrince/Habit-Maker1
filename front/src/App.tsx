import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ItemList from "./ItemList/ItemList";
import Modal from "./Modal/Modal";

const App = () => {
    const [editingItem, setEditingItem] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const onAdd = () => {
        setIsEditing(true);
    };
    const onCancel = () => {
        setIsEditing(false);
    };

    return (
        <div className="page">
            <Header onAdd={onAdd} />
            <Modal isEditing={isEditing} onCancel={onCancel} />
            <ItemList />
            <Footer />
        </div>
    );
};

export default App;
