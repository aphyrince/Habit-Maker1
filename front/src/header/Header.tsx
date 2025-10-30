import "./Header.css";

const Header = ({ onAdd }: { onAdd: () => void }) => {
    return (
        <div className="header">
            <p className="date">10월 2일</p>
            <div className="menu">
                <button onClick={onAdd}>추가</button>
                <button>설정</button>
            </div>
        </div>
    );
};

export default Header;
