/// <reference types="web-bluetooth" />
import type { IDeviceDiscover, DiscoverEventBus, DeviceType, DiscoverConstructorArgumentType } from '@ubt/ucode-common-types';
import { BleRegisterOptions } from '../interface';
export declare class MobileBleDiscover implements IDeviceDiscover {
    private _isDiscovering;
    protected readonly filters: BluetoothLEScanFilter[];
    protected readonly optionalServices: BluetoothServiceUUID[];
    private _mobileBle;
    deviceType: DeviceType;
    eventbus: DiscoverEventBus;
    protected options: BleRegisterOptions;
    private _customDeviceName;
    /**
     * mobile native bluetooth Discover 设备扫描
     * @param injectArgs uCode 初始化 Discover 的时候会注入的参数
     */
    constructor(injectArgs: DiscoverConstructorArgumentType<BleRegisterOptions>);
    get isDiscovering(): boolean;
    private _checkFeatureAndPermission;
    /**
     * 检查蓝牙的准备操作，目前没有检查
     * @todo
     * @virtual
     * @returns
     */
    beforeStart(): Promise<void>;
    /**
     * 开始扫描
     * @returns
     */
    start(): Promise<void>;
    /**
     * 停止扫描
     * @returns
     */
    stop(): Promise<void>;
    /**
     * 销毁扫描
     * @returns
     */
    destroy(): Promise<void>;
}
export default MobileBleDiscover;
