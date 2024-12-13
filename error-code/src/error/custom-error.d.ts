import { UCodeErrorType } from '@ubt/ucode-common-types';
export declare type UCodeCustomErrorConstructorType = {
    errorCode: string;
    message: string;
    extraData?: UCodeErrorType.ExtraData;
};
export declare class UCodeCustomError extends Error implements UCodeErrorType.CustomError {
    private _errorCode;
    private _message;
    private _extraData?;
    constructor(args: UCodeCustomErrorConstructorType);
    get errorCode(): string;
    get errorMessage(): string;
    get extraData(): UCodeErrorType.ExtraData | undefined;
}
