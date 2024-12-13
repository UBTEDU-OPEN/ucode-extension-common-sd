/**
 * 第一个参数大于第二个参数时，返回true，取版本号三段
 * @returns true is "preV > currV"
 */
export declare const greater: (preV: string, currV: string) => boolean;
/**
 * 第一个参数小于第二个参数时，返回true，取版本号三段
 * @returns true is "preV < currV"
 */
export declare const less: (preV: string, currV: string) => boolean;
/**
 * 第一个参数等于第二个参数时，返回true，取版本号三段
 * @returns true is "preV === currV"
 */
export declare const equal: (preV: string, currV: string) => boolean;
export declare const major: (version: string) => number;
