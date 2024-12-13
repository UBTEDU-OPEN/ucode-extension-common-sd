/// <reference types="node" />
import type { IDeviceDiscover, DiscoverEventBus, DeviceType, DiscoverConstructorArgumentType } from '@ubt/ucode-common-types';
import { AddressInfo } from '../../ucodelink';
import { UDPRegisterOptions } from './types';
/**
 * UDP其实有三种搜索方式，
 * 1、主动广播消息，让设备回应设备信息。（发消息，并有消息回应）
 * 2、监听广播消息，该消息是设备广播过来的。（不发消息，有消息回应）
 * 3、广播TCP或其他服务信息，让设备自己连接。（发消息，没有消息回应，特殊情况，不实现）
 */
export declare class UDPDiscover implements IDeviceDiscover {
    eventbus: DiscoverEventBus;
    protected _deviceType: DeviceType;
    private _isDiscovering;
    private _udp;
    private _options?;
    private _discoveredDevices;
    constructor(injectArgs: DiscoverConstructorArgumentType<UDPRegisterOptions>);
    /**
     * 是否正在扫描中
     */
    get isDiscovering(): boolean;
    /**
     * 当前设备类型信息
     */
    get deviceType(): DeviceType;
    _bindUDPEvent(): void;
    _unbindUPDEvent(): void;
    /**
     * 当UDP收到消息
     */
    _onReceived(msg: Buffer, rinfo: AddressInfo): Promise<void>;
    _onListening(): Promise<void>;
    _onError(error: any): Promise<void>;
    _onClose(): void;
    _onConnect(): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    destroy(): Promise<void>;
    /**
     * 当启动扫描时，发送消息
     */
    _sendMsgWhenStart(): Promise<void>;
    _setOptions(): Promise<void>;
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
