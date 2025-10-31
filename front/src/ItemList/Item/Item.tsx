import "./Item.css";
import { randomColor } from "../../utils/randomColor";
import { useEffect, useState } from "react";
import { ItemData } from "../../utils/types";

const Item = ({
    onItemClick,
}: {
    onItemClick: (targetItem: ItemData) => void;
}) => {
    const itemData: ItemData = {
        isChecked: false,
        isFocused: false,
        text: "text1",
        bgColor: randomColor(),
        fontColor: "#fff",
        logList: [],
    };
    const [isChecked, setIsChecked] = useState(itemData.isChecked);
    const [style, setStyle] = useState({
        backgroundColor: itemData.bgColor,
        color: itemData.fontColor,
    });
    const [text, setText] = useState(itemData.text);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsChecked((prev) => !prev);
        e.stopPropagation();
    };

    return (
        <div
            className="item"
            style={style}
            onClick={() => {
                onItemClick(itemData);
            }}
        >
            <div
                className={`checker ${isChecked && "checked"}`}
                onClick={handleClick}
            >
                {isChecked && <img src="./check_icon.svg" />}
            </div>
            <p className="text">{text}</p>
        </div>
    );
};

export default Item;
