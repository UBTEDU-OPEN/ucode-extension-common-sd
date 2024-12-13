/**
 * 检测颜色字符串是否合法
 * @param str
 */
export declare function isValidHexColor_(str: string): boolean;
/**
 * 规范化颜色hex字符串
 * @param hexColor
 */
export declare function normalizeHex(hexColor: string): string;
/**
 * hex颜色字符串转rgb格式
 * @param hexColor
 */
export declare function hexToRgb(hexColor: string): number[];
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * 颜色字符串hex格式转rgb字符串。仅处理#开头的，如 #FFF => [255,255,255], 或 #FFFFFF => [255,255,255]
 * 其他情况直接返回原字符串，或者[0, 0, 0]
 * @param color 带#开头的字符串
 */
export declare const lightHex2rgb: (color?: string | undefined) => string | number[];
