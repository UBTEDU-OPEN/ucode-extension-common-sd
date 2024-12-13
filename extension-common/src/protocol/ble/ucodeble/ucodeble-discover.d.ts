/// <reference types="web-bluetooth" />
import type { IDeviceDiscover, DiscoverEventBus, DeviceType, DiscoverConstructorArgumentType } from '@ubt/ucode-common-types';
import { BleRegisterOptions } from '../interface';
export declare class UCodeBleDiscover implements IDeviceDiscover {
    private _isDiscovering;
    protected readonly filters: BluetoothLEScanFilter[];
    protected readonly optionalServices: BluetoothServiceUUID[];
    private _uCodeBle;
    deviceType: DeviceType;
    eventbus: DiscoverEventBus;
    protected options: BleRegisterOptions;
    private _customDeviceName;
    /**
     * **UCodeBle** Discover 设备扫描
     * @param injectArgs uCode 初始化 Discover 的时候会注入的参数
     */
    constructor(injectArgs: DiscoverConstructorArgumentType<BleRegisterOptions>);
    get isDiscovering(): boolean;
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
export default UCodeBleDiscover;
