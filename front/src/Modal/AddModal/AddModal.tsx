import React, { ChangeEvent, useCallback, useState } from "react";
import "./AddModal.css";
import { ItemData } from "../../utils/types";
import { randomColor } from "../../utils/randomColor";

const AddModal = () => {
    const [newItemData, setNewItemData] = useState<ItemData>({
        key: Date(),
        isChecked: false,
        isFocused: false,
        text: "",
        bgColor: randomColor(),
        fontColor: "#000",
        logList: [],
        comment: "",
    });

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setNewItemData((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    return (
        <div className="addModal">
            <input
                name="text"
                value={newItemData.text}
                onChange={handleChange}
                className="text elem"
                placeholder="습관명"
                type="text"
            ></input>
            <div className="elem bgColor">
                <label>배경색</label>
                <input
                    name="bgColor"
                    value={newItemData.bgColor}
                    onChange={handleChange}
                    type="color"
                ></input>
            </div>
            <div className="elem fgColor">
                <label>글자색</label>
                <input
                    name="fontColor"
                    value={newItemData.fontColor}
                    onChange={handleChange}
                    type="color"
                ></input>
            </div>
            <textarea
                name="comment"
                value={newItemData.comment}
                onChange={handleChange}
                className="elem comment"
                placeholder="메모"
            ></textarea>
            <button className="submitBtn">완료</button>
        </div>
    );
};

export default AddModal;
