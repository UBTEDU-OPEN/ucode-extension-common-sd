import { DiscoverDeviceRegister } from '@ubt/ucode-common-types';
import { DiscoverDeviceOptions } from '../interface';
import { UDPRegisterOptions } from './types';
export declare function getUDPDeviceType(options: {
    scanTime?: number;
}): {
    scanTime: number | undefined;
    needUcodelink: boolean;
    id: string;
    name: string;
    icon?: string | undefined;
    tip?: import("@ubt/ucode-common-types").DeviceConnectionTip | undefined;
    connectType: "discover";
    skipDuplicate?: boolean | undefined;
};
export declare function getUDPDeviceRegister(options: DiscoverDeviceOptions<UDPRegisterOptions>): DiscoverDeviceRegister<UDPRegisterOptions>;
