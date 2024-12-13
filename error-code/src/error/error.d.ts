import { UCodeErrorType } from '@ubt/ucode-common-types';
import { UCodeErrorCode, CustomErrorCode } from '../constant/error-code';
export declare type UCodeErrorConstructorType = {
    errorCode: UCodeErrorCode | CustomErrorCode;
    message?: string;
    subErrorCode?: string;
    subMessage?: string;
    customData?: string;
    extraData?: UCodeErrorType.ExtraData;
};
export declare class UCodeError extends Error {
    private _errorCode;
    private _subErrorCode?;
    private _message?;
    private _subMessage?;
    private _customData?;
    private _extraData?;
    constructor(args: UCodeErrorConstructorType);
    get errorCode(): "11001" | "11002" | "11003" | "11004" | "11005" | "11010" | "11011" | "11012" | "11013" | "11014" | "11015" | "11016" | "11017" | "11018" | "11019" | "11020" | "11021" | "11022" | "11023" | "11024" | "11025" | "11026" | "11027" | "11028" | "11029" | "11030" | "12000" | "12001" | "12002" | "12003" | "12004" | "12005" | "12006" | "12007" | "12008" | "12009" | "12100" | "12101" | "12102" | "12103" | "12105" | "12200" | "12201" | "12202" | "12300" | "12301" | "12302" | "12303" | "10001" | "10002" | "10003" | "10004" | "10005" | "10006" | "13000" | "13001" | "13002" | "13003" | "13004" | "13005" | "13006" | "13007" | "13008" | "13009" | "13010" | "13011" | "13012" | "13013" | "13014" | "13015" | "14001" | "14002" | "15001" | "15002" | "15003" | "15004" | "15005" | "16001" | "16002" | "16003" | "16004" | "16005" | "16006" | "16007" | "99999";
    get subErrorCode(): string | undefined;
    get extraData(): UCodeErrorType.ExtraData | undefined;
    get errorMessage(): string | undefined;
    get subErrorMessage(): string | undefined;
    get customData(): string | undefined;
    serialize(): UCodeErrorConstructorType;
}
