import "./Item.css";
import { ItemData, ModalMode } from "../../utils/types";
import { useItems } from "../../context/Items/ItemsContext";
import { useMode } from "../../context/Mode/ModeContext";

const Item = ({ data }: { data: ItemData }) => {
    const { update } = useItems();
    const { changeMode } = useMode();

    const handleCheck = (e: React.MouseEvent<HTMLDivElement>) => {
        // setIsChecked((prev) => !prev);
        data.isChecked = !data.isChecked;
        update(data);
        e.stopPropagation();
    };

    return (
        <div
            className="item"
            style={{
                backgroundColor: data.bgColor,
                color: data.fontColor,
            }}
            onClick={() => {
                changeMode(ModalMode.DASHBOARD);
            }}
        >
            <div
                className={`checker ${data.isChecked && "checked"}`}
                onClick={handleCheck}
            >
                {data.isChecked && <img src="./check_icon.svg" />}
            </div>
            <p className="text">{data.text}</p>
        </div>
    );
};

export default Item;
