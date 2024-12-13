import type { DeviceRegisterType } from '@ubt/ucode-common-types';
import { SerialPortRegisterOptions } from './common';
import { DiscoverDeviceOptions } from '../interface';
/**
 * 封装好的获取 串口协议 的注册器
 *
 * 由于 串口 是 `discover` 类型的设备类型
 *
 * 已经内置了一个默认的串口 Discover {@link SerialPortDiscover}
 *
 *
 *

 *
 * @param register 传入一个注册器
 * @returns 返回一个标准的 {@link DeviceRegister}
 */
export declare function getSerialPortDeviceRegister(register: DiscoverDeviceOptions<SerialPortRegisterOptions>): DeviceRegisterType;
