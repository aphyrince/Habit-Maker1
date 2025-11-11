import "./DashBoardModal.css";
import { useSelect } from "../../../context/Select/SelectContext";
import { useState } from "react";
import { ItemData } from "../../../utils/types";

const DashBoardModal = ({ item }: { item: ItemData }) => {
    const [commentText, setCommentText] = useState<string>(item.comment);
    const [editMode, setEditMode] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(() => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });

    return (
        <div className="modal-overlay">
            <h2 className="modal-title">{item.text}</h2>
            <div className="modal-status">
                {item.isChecked ? "완료됨" : "미완료"}
            </div>
            <div className="modal-section">
                <div className="month-nav">
                    <button className="month-btn" title="이전 달">
                        {"<"}
                    </button>
                    <h3>{currentMonth.getMonth() + 1}</h3>
                    <button className="month-btn" title="다음 달">
                        {">"}
                    </button>
                </div>
                <div className="chart">차트</div>
            </div>
            <div className="modal-section">
                <h3>코멘트</h3>
                {editMode ? (
                    <textarea
                        className="comment-input"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        rows={4}
                    />
                ) : (
                    <div
                        className="comment-text"
                        onDoubleClick={() => setEditMode(true)}
                        title="더블클릭으로 수정"
                    >
                        {commentText}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoardModal;
