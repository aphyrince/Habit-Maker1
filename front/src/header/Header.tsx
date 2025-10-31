import "./Header.css";

const Header = ({
    onAdd,
    onSetting,
}: {
    onAdd: () => void;
    onSetting: () => void;
}) => {
    return (
        <div className="header">
            <button className="date">10월 2일</button>
            <div className="menu">
                <button onClick={onAdd}>추가</button>
                <button onClick={onSetting}>설정</button>
            </div>
        </div>
    );
};

export default Header;
