/**
 * Toast 显示的位置
 */
export declare enum ToastPosition {
    Top = "top",
    Bottom = "bottom",
    Center = "center"
}
/**
 * Toast 淡入淡出的时长 常量
 */
export declare enum ToastEffectDuration {
    Disable = 0,
    Slow = 500,
    Normal = 300,
    Fast = 100
}
/**
 * Toast PropType 用于描述 Toast 组件
 */
export declare type ToastPropType = {
    /**
     * 是否显示
     */
    visible: boolean;
    /**
     * 文本
     */
    text?: string;
    /**
     * 类型
     */
    position?: ToastPosition;
    /**
     * 时长, 单位是毫秒
     */
    duration?: number;
    /**
     * 特效时长, 单位是毫秒
     */
    effectDuration?: ToastEffectDuration | number;
};
/**
 * 提示组件Toast。
 * @param text 需要提示的文案
 * @param options 参数，支持设置Toast显示的位置、时长、动效时长。
 */
export declare function Toast(text: string, options?: Omit<ToastPropType, 'visible' | 'text'>): Promise<any>;
