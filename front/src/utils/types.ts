export interface ItemData {
    isChecked: boolean;
    isFocused: boolean;
    text: string;
    bgColor: string;
    fontColor: string;
    logList: string[];
}

export enum ModalMode {
    None,
    Add,
    Setting,
    DashBoard,
}
