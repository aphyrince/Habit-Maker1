import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Modal from "./components/Modal/Modal";

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
