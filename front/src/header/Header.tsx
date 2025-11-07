import { useMode } from "../context/Mode/ModeContext";
import { ModalMode } from "../utils/types";
import "./Header.css";

const Header = () => {
    const { changeMode } = useMode();

    const handleCreateClick = () => {
        changeMode(ModalMode.CREATE);
    };
    const handleSettingClick = () => {
        changeMode(ModalMode.SETTING);
    };

    return (
        <div className="header">
            <button className="date">10월 2일</button>
            <div className="menu">
                <button onClick={handleCreateClick}>추가</button>
                <button onClick={handleSettingClick}>설정</button>
            </div>
        </div>
    );
};

export default Header;
