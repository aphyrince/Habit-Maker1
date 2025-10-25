import "./Item.css";
import { randomColor } from "../../utils/randomColor";
import { useEffect, useState } from "react";
import { isChecker } from "../../utils/isChecker";

const Item = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [bgColor, setBgColor] = useState({ backgroundColor: randomColor() });

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        isChecker(target) ? setIsChecked((prev) => !prev) : setIsEditing(true);
    };

    return (
        <div className="item" style={bgColor} onClick={handleClick}>
            <div className="checker"></div>
            <div className="inner-text">
                <p className="title">title</p>
                <p className="last-day">최근 어제</p>
            </div>
        </div>
    );
};

export default Item;
