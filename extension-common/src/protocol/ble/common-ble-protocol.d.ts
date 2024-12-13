/// <reference types="web-bluetooth" />
/// <reference types="node" />
import type { DeviceEventbusInterface, DeviceType, DeviceConnectionInterface, IDiscoverDevice, HardwareDeviceConstructorArgumentType } from '@ubt/ucode-common-types';
import { EConnectStatus } from '@ubt/ucode-utils/dist/constant/index';
import { Disposable } from '@ubt/typedevent';
import { DataQueue } from '@ubt/ucode-utils/dist/queue';
import { BleRegisterOptions } from './interface';
declare type BleQueueData = {
    characteristic: BluetoothRemoteGATTCharacteristic;
    data: Buffer;
};
export declare type CommonBleDataType = {
    uuid: BluetoothCharacteristicUUID;
    data: Buffer;
};
export declare type BleCharacteristicsMap = Map<BluetoothCharacteristicUUID, BluetoothRemoteGATTCharacteristic>;
/**
 * 抽象的 公共 蓝牙协议
 */
export declare abstract class CommonBleProtocol implements DeviceConnectionInterface {
    protected autoGetCharacteristics: boolean;
    static DEFAULT_QUEUE_INTERVAL: number;
    connectStatus: EConnectStatus;
    private _readDisposables;
    private _services;
    private _characteristics;
    private _servicesUUID;
    private _defaultWriteCharacteristic?;
    private _defaultWriteCharacteristicUUID?;
    private _queue?;
    protected readonly filters: BluetoothLEScanFilter[];
    private _bleDevice?;
    protected readonly optionalServices?: BluetoothServiceUUID[];
    private _dataEvent;
    readonly deviceType: DeviceType;
    readonly eventbus: DeviceEventbusInterface;
    private options;
    protected get characteristics(): BleCharacteristicsMap;
    /**
     * 获取所有的 service UUID，是一个数组
     */
    get serviceUUIDs(): BluetoothServiceUUID[];
    /**
     * 获取当前连接的蓝牙对象：[BluetoothDevice](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice)
     */
    get device(): BluetoothDevice | undefined;
    isConnected(): boolean;
    /**
     * Common Ble 的构造函数
     * @param injectArgs uCode 初始化 HardwarDevice 的时候 注入的参数
     * @param autoGetCharacteristics 是否要自动获取所有的 **Get** 类型的 `Characteristic`，默认是打开的
     */
    constructor(injectArgs: HardwareDeviceConstructorArgumentType<BleRegisterOptions>, autoGetCharacteristics?: boolean);
    /**
     * 获取当前队列，蓝牙会默认打开队列
     */
    get queue(): DataQueue<BleQueueData> | undefined;
    /**
     *
     * @param listener 监听事件
     * @returns 返回一个可以被销毁的 {@link Disposable}
     */
    onData(listener: (args: CommonBleDataType) => void): Disposable;
    /**
     * 这是封装好的一个处理超时问题的函数，提供给子类使用
     *
     * @param fn async 异步函数
     * @param time timeout的时间
     * @param errMsg 错误信息
     * @param debugMsg 调试信息
     * @returns 返回一个 Promise<R>
     */
    protected processWithTimeout<R>(fn: () => Promise<R>, time: number, errMsg?: string, debugMsg?: string): Promise<R>;
    private _initServices;
    private _initCharacteristics;
    private _initCharacteristic;
    private getCharacteristic;
    /**
     * 触发蓝牙连接，需要传入一个 BluetoothDevice
     * @param bleDevice [BluetoothDevice](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice)
     * @returns
     */
    protected bleConnect(bleDevice: BluetoothDevice): Promise<void>;
    /**
     * 连接前操作， Webble 和 uCodeble 都要实现
     * @param device 选中的设备
     */
    protected abstract bleBeforeConnect(device?: IDiscoverDevice | BluetoothDevice): Promise<BluetoothDevice>;
    protected abstract bleAfterConnect(gattServer: BluetoothRemoteGATTServer, characteristics: BleCharacteristicsMap): Promise<void>;
    /**
     * WebBle 属于 {@link AutoConnectDeviceType} 连接不需要传 device
     * @param device BleDiscoverDevice
     */
    connect(device?: IDiscoverDevice): Promise<void>;
    private _startQueue;
    disconnect: () => Promise<void>;
    private _write;
    /**
     * 默认的发送指令
     *
     * 这里会去调用默认的 **WriteCharacteristic**
     *
     * @param data 蓝牙数据，默认是 Buffer 类型数据
     * @param isTopPriority 是否高优先级
     * @returns
     */
    send(data: Buffer, isTopPriority?: boolean): boolean;
    /**
     * 蓝牙由于有多个 **Characteristic**，因此如果不是默认的，可以使用这个指定的来发送
     * @param characteristic 需要制定写的 **Characteristic**
     * @param data 蓝牙数据，Buffer 类型数据
     * @param isTopPriority 是否高优先级
     * @returns
     */
    protected sendWithCharacteristic(characteristic: BluetoothRemoteGATTCharacteristic, data: Buffer, isTopPriority?: boolean): boolean;
    /**
     * @overwrite
     * @returns void
     */
    afterConnect(): Promise<void>;
    /**
     * @overwrite
     * @returns void
     */
    beforeDestroy(): Promise<void>;
    /**
     * 销毁蓝牙 HardwarDevice
     * @returns
     */
    destroy(): Promise<void>;
    /**
     * 清理请求队列
     */
    protected clearRequestQueue(): void;
}
export {};
