import { UCodeCustomError, UCodeCustomErrorConstructorType } from './custom-error';
import { UCodeError, UCodeErrorConstructorType } from './error';
import { UCodeErrorCode } from '../constant/error-code';
export declare function getUCodeError(args: UCodeErrorConstructorType): UCodeError;
/**
 * 捕捉 自定义 错误, 并且封装为 UCodeError
 * @param errorCode 目标错误码
 * @param err 抛出来的错误
 * @param defaultMsg 默认消息
 */
export declare function getWrapperUCodeError(errorCode: UCodeErrorCode, err: unknown, options?: {
    defaultMsg?: string;
    customData?: string;
}): UCodeError;
export declare function getCustomError(args: UCodeCustomErrorConstructorType): UCodeCustomError;
export declare function isUCodeError(e: unknown): boolean;
export declare function isUCodeCustomError(e: unknown): boolean;
export declare function castUCodeError(e: unknown): UCodeError;
export declare function castUCodeCustomError(e: unknown): UCodeCustomError;
