import { useMode } from "../../context/Mode/ModeContext";
import { ModalMode } from "../../utils/types";
import "./Header.css";

const Header = () => {
    const { changeMode } = useMode();

    const handleCreateClick = () => {
        changeMode(ModalMode.CREATE);
    };

    return (
        <div className="header">
            <button className="date">10월 2일</button>
            <div className="menu">
                <button onClick={handleCreateClick}>추가</button>
            </div>
        </div>
    );
};

export default Header;
