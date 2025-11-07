export interface ItemData {
    key: string;
    isChecked: boolean;
    isFocused: boolean;
    text: string;
    bgColor: string;
    fontColor: string;
    logList: string[];
    comment: string;
}

export enum ModalMode {
    NONE = "none",
    CREATE = "create",
    SETTING = "setting",
    DASHBOARD = "dashboard",
}
