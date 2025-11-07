import React, { ChangeEvent, useCallback, useState } from "react";
import "./AddModal.css";
import { ItemData, ModalMode } from "../../utils/types";
import { randomColor } from "../../utils/randomColor";
import { useItems } from "../../context/Items/ItemsContext";
import { useMode } from "../../context/Mode/ModeContext";

const AddModal = () => {
    const [newItem, setNewItem] = useState<ItemData>({
        key: Date(),
        isChecked: false,
        isFocused: false,
        text: "",
        bgColor: randomColor(),
        fontColor: "#000",
        logList: [],
        comment: "",
    });
    const { create } = useItems();
    const { changeMode } = useMode();

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setNewItem((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    const handleSubmit = () => {
        create(newItem);
        changeMode(ModalMode.NONE);
    };

    return (
        <div className="addModal">
            <input
                name="text"
                value={newItem.text}
                onChange={handleChange}
                className="text elem"
                placeholder="습관명"
                type="text"
            ></input>
            <div className="elem bgColor">
                <label>배경색</label>
                <input
                    name="bgColor"
                    value={newItem.bgColor}
                    onChange={handleChange}
                    type="color"
                ></input>
            </div>
            <div className="elem fgColor">
                <label>글자색</label>
                <input
                    name="fontColor"
                    value={newItem.fontColor}
                    onChange={handleChange}
                    type="color"
                ></input>
            </div>
            <textarea
                name="comment"
                value={newItem.comment}
                onChange={handleChange}
                className="elem comment"
                placeholder="메모"
            ></textarea>
            <button className="submitBtn" onClick={handleSubmit}>
                완료
            </button>
        </div>
    );
};

export default AddModal;
