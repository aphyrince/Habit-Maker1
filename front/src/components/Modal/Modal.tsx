import { useMode } from "../../context/Mode/ModeContext";
import { useSelect } from "../../context/Select/SelectContext";
import { ModalMode } from "../../utils/types";
import AddModal from "./AddModal/AddModal";
import DashBoardModal from "./DashBoardModal/DashBoardModal";
import "./Modal.css";
import SettingModal from "./SettingModal/SettingModal";

const Modal = () => {
    const { mode, changeMode } = useMode();
    const { selected } = useSelect();

    const handleCloseClick = () => {
        changeMode(ModalMode.NONE);
    };

    return (
        <div className={`modal ${mode !== ModalMode.NONE && "activate"}`}>
            <div className="modalHead">
                <button onClick={handleCloseClick}>취소</button>
            </div>
            <div className="modalContent">
                {mode === ModalMode.CREATE && <AddModal />}
                {mode === ModalMode.SETTING && <SettingModal />}
                {mode === ModalMode.DASHBOARD && selected && (
                    <DashBoardModal item={selected} />
                )}
            </div>
        </div>
    );
};

export default Modal;
