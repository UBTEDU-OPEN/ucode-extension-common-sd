export declare type TipDialogData = {
    text: string;
};
export declare type TipDialogResult = {
    onConfirm?: boolean;
    onCancel?: boolean;
    onClose?: boolean;
};
/**
 * 提示组件Toast。
 * TODO: 目前仅提供自定义消息内容的参数，其他如按钮显示个数，标题等，后续根据需要再开放。 2021-12-3 bright.lin
 * @param text 需要提示的文案
 * @param options 参数，支持设置Toast显示的位置、时长、动效时长。
 */
export declare function showTipDialog(text: string): Promise<TipDialogResult>;
/**
 * 输入对话框 参数格式
 */
export declare type InputDialogData = {
    title: string;
    placeholder?: string;
    isPwd?: boolean;
    initValue?: string;
    autofocus?: boolean;
};
/**
 * 输入对话框 结果返回格式
 */
export declare type InputDialogResult = {
    onConfirm?: boolean;
    data?: string;
    onCancel?: boolean;
    onClose?: boolean;
};
/**
 * 显示输入对话框
 * @param data 输入对话框 参数
 * @returns
 */
export declare function showInputDialog(data: InputDialogData): Promise<InputDialogResult>;
