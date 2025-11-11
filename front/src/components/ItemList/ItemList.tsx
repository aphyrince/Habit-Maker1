import { useItems } from "../../context/Items/ItemsContext";
import Item from "./Item/Item";
import "./ItemList.css";

const ItemList = () => {
    const { items } = useItems();
    return (
        <li className="list">
            {items.map((data) => (
                <Item key={data.key} data={data} />
            ))}
        </li>
    );
};

export default ItemList;
