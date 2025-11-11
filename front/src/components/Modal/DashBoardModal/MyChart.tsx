import React, { useState, useMemo } from "react";
import { X, Save, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
} from "recharts";
import "./DashBoardModal.css";

export interface ItemData {
    key: string;
    isChecked: boolean;
    isFocused: boolean;
    text: string;
    bgColor: string;
    fontColor: string;
    logList: string[]; // Date() 문자열
    comment: string;
}

interface DashBoardModalProps {
    item: ItemData;
    onClose: () => void;
    onSaveComment?: (newComment: string) => void;
}

const DashBoardModal: React.FC<DashBoardModalProps> = ({
    item,
    onClose,
    onSaveComment,
}) => {
    const [editMode, setEditMode] = useState(false);
    const [commentText, setCommentText] = useState(item.comment);
    const [currentMonth, setCurrentMonth] = useState(() => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });

    // 월 이동 핸들러
    const handleMonthChange = (offset: number) => {
        setCurrentMonth((prev) => {
            const newMonth = new Date(prev);
            newMonth.setMonth(prev.getMonth() + offset);
            return newMonth;
        });
    };

    // logList → 그래프 데이터 변환
    const chartData = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const data: { date: string; count: number }[] = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const count = item.logList.filter((log) => {
                const d = new Date(log);
                return (
                    d.getFullYear() === year &&
                    d.getMonth() === month &&
                    d.getDate() === day
                );
            }).length;
            data.push({
                date: String(day).padStart(2, "0"),
                count,
            });
        }

        return data;
    }, [item.logList, currentMonth]);

    const handleSave = () => {
        setEditMode(false);
        onSaveComment?.(commentText);
    };

    const monthLabel = `${currentMonth.getFullYear()}년 ${
        currentMonth.getMonth() + 1
    }월`;

    return (
        <div className="modal-overlay">
            <motion.div
                className="modal-container"
                style={{ borderTop: `6px solid ${item.bgColor}` }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >
                {/* 닫기 버튼 */}
                <button className="modal-close" onClick={onClose}>
                    <X size={20} />
                </button>

                {/* 제목 */}
                <h2 className="modal-title" style={{ color: item.fontColor }}>
                    {item.text}
                </h2>

                {/* 상태 */}
                <div className="modal-status">
                    <span
                        className={`status-badge ${
                            item.isChecked ? "status-done" : "status-progress"
                        }`}
                    >
                        {item.isChecked ? "완료됨 ✅" : "진행 중 ⏳"}
                    </span>
                </div>

                {/* 📊 월별 그래프 */}
                <div className="modal-section">
                    <div className="month-nav">
                        <button
                            className="month-btn"
                            onClick={() => handleMonthChange(-1)}
                            title="이전 달"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <h3>{monthLabel}</h3>
                        <button
                            className="month-btn"
                            onClick={() => handleMonthChange(1)}
                            title="다음 달"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={180}>
                            <BarChart data={chartData}>
                                <XAxis dataKey="date" tick={{ fontSize: 9 }} />
                                <YAxis width={25} />
                                <Tooltip />
                                <Bar
                                    dataKey="count"
                                    fill={item.bgColor}
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 🗒 코멘트 */}
                <div className="modal-section">
                    <h3>코멘트</h3>
                    {editMode ? (
                        <div className="comment-edit-box">
                            <textarea
                                className="comment-input"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                rows={4}
                            />
                            <button
                                className="comment-save-btn"
                                onClick={handleSave}
                            >
                                <Save size={16} style={{ marginRight: 4 }} />
                                저장
                            </button>
                        </div>
                    ) : (
                        <div
                            className="comment-text"
                            onDoubleClick={() => setEditMode(true)}
                            title="더블클릭으로 수정"
                        >
                            {item.comment || "작성된 코멘트가 없습니다."}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default DashBoardModal;
