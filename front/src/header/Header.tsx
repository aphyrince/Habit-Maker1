import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <p className="date">10월 2일</p>
            <div className="menu">
                <button>추이</button>
                <button>╋</button>
                <button>···</button>
            </div>
        </div>
    );
};

export default Header;
