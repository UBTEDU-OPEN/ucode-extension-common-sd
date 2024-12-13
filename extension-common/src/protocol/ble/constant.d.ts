import type { AutoConnectDeviceType, DiscoverDeviceType } from '@ubt/ucode-common-types';
/**
 * UCodeBle 设备类型
 * ```javascript
 * const devicetype = {
 *    id: DeviceTypeID.ucodeble,
 *    name: '蓝牙协议'
 *    conenctType: 'discover'
 * };
 * ```
 */
export declare const UCodeBleDeviceType: DiscoverDeviceType;
/**
 * Webble 设备类型
 * ```javascript
 * const devicetype = {
 *    id: DeviceTypeID.webble,
 *    name: '蓝牙协议'
 *    conenctType: 'auto'
 * };
 * ```
 */
export declare const WebBleDeviceType: AutoConnectDeviceType;
