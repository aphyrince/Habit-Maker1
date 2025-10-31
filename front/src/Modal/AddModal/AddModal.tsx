import React from "react";
import "./AddModal.css";

const AddModal = () => {
    return (
        <div className="addModal">
            <input placeholder="습관명" type="text"></input>
            <div>
                <label>배경색</label>
                <input type="color"></input>
            </div>
            <div>
                <label>글자색</label>
                <input type="color"></input>
            </div>
            <input placeholder="메모" type="text"></input>
            <div>
                <label>목표</label>
                <input type="number"></input>
            </div>
        </div>
    );
};

export default AddModal;
