export declare type familyType = 'IPv4' | 'IPv6';
/**
 * 地址对象接口
 */
export interface AddressInfo {
    address: string;
    family: familyType;
    port: number;
}
export declare type AddressType = {
    address: AddressInfo;
};
export interface LookupOneOptions {
    family?: number | undefined;
    hints?: number | undefined;
    /**
     * @default true
     */
    verbatim?: boolean | undefined;
    all?: false | undefined;
}
export interface ErrnoException {
    errno?: number | undefined;
    code?: string | undefined;
    path?: string | undefined;
    syscall?: string | undefined;
    stack?: string | undefined;
}
export declare type LookupFunction = (hostname: string, options: LookupOneOptions, callback: (err: ErrnoException | null, address: string, family: number) => void) => void;
