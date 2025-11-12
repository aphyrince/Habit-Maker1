import "./DashBoardModal.css";
import { useMemo, useState } from "react";
import { ItemData } from "../../../utils/types";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const DashBoardModal = ({ item }: { item: ItemData }) => {
    const [commentText, setCommentText] = useState<string>(item.comment);
    const [editMode, setEditMode] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(() => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });

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
        data.forEach((elem) => console.log(elem));

        return data;
    }, [item.logList, currentMonth]);

    return (
        <div
            className="modal-overlay"
            style={{ borderTop: `10px solid ${item.bgColor}` }}
        >
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
                <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height={180}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="date" tick={{ fontSize: 9 }} />
                            <YAxis width={25} ticks={[0, 1, 2]} />
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
