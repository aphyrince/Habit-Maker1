import { useItems } from "../../../context/Items/ItemsContext";
import { useMode } from "../../../context/Mode/ModeContext";
import { useSelect } from "../../../context/Select/SelectContext";
import { ItemData, ModalMode } from "../../../utils/types";
import { CheckCircleIcon } from "lucide-react";
import "./Item.css";

const Item = ({ data }: { data: ItemData }) => {
    const { update } = useItems();
    const { changeMode } = useMode();
    const { setSelected } = useSelect();

    const handleCheck = (e: React.MouseEvent<HTMLDivElement>) => {
        data.isChecked = !data.isChecked;
        if (data.isChecked) {
            data.logList.push(new Date().toDateString());
            update(data);
        } else {
            const today = new Date().toDateString();
            data.logList = data.logList.filter((log) => {
                const day = new Date(log).toDateString();
                return day !== today;
            });
            update(data);
        }
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
                setSelected(data);
                changeMode(ModalMode.DASHBOARD);
            }}
        >
            <div
                className={`checker ${data.isChecked && "checked"}`}
                onClick={handleCheck}
            >
                {data.isChecked && <CheckCircleIcon size={"50px"} />}
            </div>
            <p className="text">{data.text}</p>
        </div>
    );
};

export default Item;
