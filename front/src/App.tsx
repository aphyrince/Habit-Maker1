import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./header/Header";
import ItemList from "./ItemList/ItemList";

const App = () => {
    return (
        <div className="page">
            <Header />
            <ItemList />
            <Footer />
        </div>
    );
};

export default App;
