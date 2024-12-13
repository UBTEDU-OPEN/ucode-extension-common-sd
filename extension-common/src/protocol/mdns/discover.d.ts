import type { IDeviceDiscover, DiscoverEventBus, DeviceType, DiscoverConstructorArgumentType } from '@ubt/ucode-common-types';
import { mDNSRegisterOptions } from './interface';
/**
 * mDNS方式搜索设备。
 * discover在handler被调用。
 */
export declare class MDNSDiscover implements IDeviceDiscover {
    private _isDiscovering;
    private _mDNSDiscovers?;
    private _tempDevices;
    needUcodelink: boolean;
    deviceType: DeviceType;
    eventbus: DiscoverEventBus;
    protected _options: mDNSRegisterOptions;
    constructor(injectArgs: DiscoverConstructorArgumentType<mDNSRegisterOptions>);
    private _initAndStart;
    get isDiscovering(): boolean;
    start(): Promise<void>;
    private _getDeviceName;
    stop(): Promise<void>;
    private _destoryMDNS;
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
export default MDNSDiscover;
