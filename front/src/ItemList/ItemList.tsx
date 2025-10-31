import Item from "./Item/Item";
import "./ItemList.css";
import { ItemData } from "../utils/types";

const ItemList = ({
    onItemClick,
}: {
    onItemClick: (targetItem: ItemData) => void;
}) => {
    return (
        <div className="list">
            <Item onItemClick={onItemClick} />
            <Item onItemClick={onItemClick} />
            <Item onItemClick={onItemClick} />
            <Item onItemClick={onItemClick} />
            <Item onItemClick={onItemClick} />
            <Item onItemClick={onItemClick} />
            <Item onItemClick={onItemClick} />
        </div>
    );
};

export default ItemList;
