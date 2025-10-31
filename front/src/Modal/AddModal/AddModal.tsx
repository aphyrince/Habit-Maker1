import React from "react";
import "./AddModal.css";

const AddModal = () => {
    return (
        <div className="addModal">
            <input
                className="text elem"
                placeholder="습관명"
                type="text"
            ></input>
            <div className="elem bgColor">
                <label>배경색</label>
                <input type="color"></input>
            </div>
            <div className="elem fgColor">
                <label>글자색</label>
                <input type="color"></input>
            </div>
            <textarea className="elem comment" placeholder="메모"></textarea>
            <button className="submitBtn">완료</button>
        </div>
    );
};

export default AddModal;
