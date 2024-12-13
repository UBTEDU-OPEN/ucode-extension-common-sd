import type { AutoConnectDeviceRegister, DiscoverDeviceRegister } from '@ubt/ucode-common-types';
import { AutoConnectDeviceOptions, DiscoverDeviceOptions } from '../interface';
import { BleRegisterOptions } from './interface';
/**
 * 获取 UCodeBle 的蓝牙注册器
 *
 * UCodeBle 是 {@link DiscoverDeviceType} 默认有一个 {@link UCodeBleDiscover}
 *
 * @param register 提供注册器
 * @returns
 */
export declare function getUCodeBleDeviceRegister(register: DiscoverDeviceOptions<BleRegisterOptions>): DiscoverDeviceRegister<BleRegisterOptions>;
/**
 *
 * 获取 Webble 的蓝牙注册器
 *
 * @param register Webble 的注册器
 * @returns
 */
export declare function getWebBleDeviceRegister(register: AutoConnectDeviceOptions<BleRegisterOptions> | DiscoverDeviceOptions<BleRegisterOptions>): AutoConnectDeviceRegister<BleRegisterOptions> | DiscoverDeviceRegister<BleRegisterOptions>;
