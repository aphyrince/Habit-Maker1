import "./Item.css";
import { randomColor } from "../../utils/randomColor";
import { useEffect, useState } from "react";
import { isChecker } from "../../utils/isChecker";
import { ItemData } from "../../global";

const Item = () => {
    const itemData: ItemData = {
        isChecked: false,
        isEditing: false,
        text: "text1",
        bgColor: randomColor(),
        fontColor: "#fff",
        logList: [],
    };
    const [isChecked, setIsChecked] = useState(itemData.isChecked);
    const [isEditing, setIsEditing] = useState(itemData.isEditing);
    const [style, setStyle] = useState({
        backgroundColor: itemData.bgColor,
        color: itemData.fontColor,
    });
    const [text, setText] = useState(itemData.text);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsChecked((prev) => !prev);
    };

    return (
        <div className="item" style={style}>
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
