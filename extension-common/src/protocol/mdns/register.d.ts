import { DiscoverDeviceRegister } from '@ubt/ucode-common-types';
import { DiscoverDeviceOptions } from '../interface';
import { mDNSRegisterOptions } from './interface';
export declare function getMdnsDeviceRegister(options: DiscoverDeviceOptions<mDNSRegisterOptions>): DiscoverDeviceRegister<mDNSRegisterOptions>;
