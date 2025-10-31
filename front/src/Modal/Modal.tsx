import { ItemData, ModalMode } from "../utils/types";
import AddModal from "./AddModal/AddModal";
import DashBoardModal from "./DashBoardModal/DashBoardModal";
import "./Modal.css";
import SettingModal from "./SettingModal/SettingModal";

const Modal = ({
    modalMode,
    onModalClose,
    focusedItem,
}: {
    modalMode: ModalMode;
    onModalClose: () => void;
    focusedItem: ItemData | null;
}) => {
    return (
        <div className={`modal ${modalMode && "activate"}`}>
            <div className="modalHead">
                <button onClick={onModalClose}>취소</button>
            </div>
            <div className="modalContent">
                {modalMode === ModalMode.Add && <AddModal />}
                {modalMode === ModalMode.Setting && <SettingModal />}
                {modalMode === ModalMode.DashBoard && <DashBoardModal />}
            </div>
        </div>
    );
};

export default Modal;
