/// <reference types="node" />
import type { IDeviceDiscover, DiscoverEventBus, DeviceType, DiscoverConstructorArgumentType } from '@ubt/ucode-common-types';
/**
 * 串口 发现实现
 */
export declare class SerialPortDiscover implements IDeviceDiscover {
    protected _deviceType: DeviceType;
    eventbus: DiscoverEventBus;
    private _intervalTime;
    private _isDiscovering;
    private _filterOptions?;
    private _customDeviceName;
    interval: NodeJS.Timer | undefined;
    constructor(injectArgs: DiscoverConstructorArgumentType);
    /**
     * 是否正在扫描中
     */
    get isDiscovering(): boolean;
    /**
     * 当前设备类型信息
     */
    get deviceType(): DeviceType;
    private _filter;
    /**
     * 开始扫描串口
     * @returns
     */
    start(): Promise<void>;
    /**
     * 停止扫描串口
     * @returns
     */
    stop(): Promise<void>;
    /**
     * Chrome WebSerial 发现
     * 具体参考：[Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)
     *
     * FIXME: 目前暂不开放
     */
    protected discoverDevicesForChromeOS(): Promise<void>;
    /**
     * 搜索 设备
     * 该功能是根据 [Node.js SerialPort.list()](https://serialport.io/docs/api-stream#serialportlist) 实现的
     */
    protected discoverDevices(): void;
    /**
     * 销毁扫描实例，如果有正在扫描，会停止
     * @returns
     */
    destroy(): Promise<void>;
    /**
     * 如果你有额外的检查工作, 可以覆写该函数
     * @virtual
     * @returns
     */
    protected checkEnvHook(): Promise<void>;
    /**
     * 该方法需要配合 **checkEnvHook** 用于同步判断是否要显示检查窗口, 默认为 **true**
     * @virtual
     * @returns
     */
    protected enableCheckEnvHook(): boolean;
    /**
     * 错误处理 钩子, 用于检测环境
     * 如果返回 false 会跳过
     * @params errorAction 错误处理的 ID
     * @virtual
     * @returns
     */
    protected handleErrorHook(errorAction: string): Promise<boolean>;
    /**
     * `DeviceConnectionInterface` 实现的接口
     * 需要配合 `prepareEnv` 一起使用
     *
     * 📢 注意: 该方法已经内置了判断 uCodeLink 的连接, 如果你有额外的环境检查, 请使用 `enableCheckEnvHook`
     * 返回的时候会用 `&&` 两个返回值
     * @sealed
     * @returns
     */
    enableCheckEnv(): boolean;
    /**
     * `DeviceConnectionInterface` 实现的接口
     * 可以配合 `enableCheckEnv` 一起使用
     *
     * 📢 注意: 该方法已经内置了判断 uCodeLink 的连接, 如果你有额外的环境检查, 请使用 `checkEnvHook`
     * 优先先执行 uCodeLink 的检测, 再执行 `checkEnvHook`
     * @sealed
     * @returns
     */
    checkEnv(): Promise<void>;
    /**
     * `DeviceConnectionInterface` 实现的接口
     * 错误处理
     * 📢 注意: 该方法已经内置了 uCodeLink 下载和启动的错误处理, 如果你有额外的错误处理, 请使用 `handleErrorHook`
     * @param errorAction
     * @returns
     */
    handleError(errorAction: string): Promise<boolean>;
}
