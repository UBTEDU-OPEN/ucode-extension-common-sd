/**
 * 平台判断分成两种，一种是系统本身，也就是 PlatformType
 * 另外一种是 宿主环境，HostType
 * 可以通过两个地方注入
 * 1. 全局变量: UCodePlatformType, UCodeHostType
 * 2. localstorage: UCodePlatformType, UCodeHostType （还没实现）
 *
 */
import type { UCode } from '@ubt/ucode-common-types';
/**
 * 返回运行的环境
 * @returns PlatformType
 */
export declare function getPlatformType(): UCode.PlatformType;
/**
 * 获取宿主环境，webview 和 flutter 需要注入 useragent
 * @returns
 */
export declare function getHostType(): UCode.HostType;
export declare function isWorker(): boolean;
/**
 * Web Worker 不属于这个范围, 需要额外使用 {@link isWorker}
 */
export declare const isBrowser: boolean;
export declare const isNode: boolean;
export declare function isElectron(): boolean;
export declare function isChromeOS(): boolean;
export declare function isMobile(): boolean;
export declare function isMac(): boolean;
declare global {
    var UCodePlatformType: UCode.PlatformType;
    var UCodeHostType: UCode.HostType;
}
