import { DeviceConnectionTip } from '@ubt/ucode-common-types';
export declare type mDNSDevice = {
    ip: string;
    serviceData: Array<any>;
    serviceHostPort: string;
    serviceName: string;
};
export declare type mDNSRegisterOptions = {
    serviceNames: Array<string>;
    maxListeners?: number;
    scanTime?: number;
    deviceNameDecorations?: {
        regexp: string | RegExp;
        replacement: string;
    };
    id?: string;
    name?: string;
    icon?: string;
    tip?: DeviceConnectionTip;
};
