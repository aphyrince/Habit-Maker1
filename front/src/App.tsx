import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ItemList from "./ItemList/ItemList";
import Modal from "./Modal/Modal";

const App = () => {
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
