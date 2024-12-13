import { AutoConnectDeviceRegister, DiscoverDeviceRegister } from '@ubt/ucode-common-types';
import { DiscoverDeviceOptions } from '../interface';
import { ConnectionOptionsType, RegisterOptionType } from './types';
/**
 * tcp设备连接配置。设备为TCP服务端，插件为TCP客户端。
 * 可以设置一个 discover，也可以不设置，不设置时，register默认为 auto 类型
 * @param options 扫描器和连接器的配置选项
 * @returns
 */
export declare function getTCPDeviceRegister<DiscoverOptionsT>(options: DiscoverDeviceOptions<RegisterOptionType<DiscoverOptionsT>>): DiscoverDeviceRegister<DiscoverOptionsT & ConnectionOptionsType> | AutoConnectDeviceRegister<ConnectionOptionsType>;
