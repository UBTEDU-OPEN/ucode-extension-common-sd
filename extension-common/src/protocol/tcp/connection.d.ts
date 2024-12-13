/// <reference types="node" />
import { EConnectStatus } from '@ubt/ucode-utils/dist/constant';
import type { DeviceEventbusInterface, IDiscoverDevice, DeviceType, DeviceConnectionInterface, HardwareDeviceConstructorArgumentType } from '@ubt/ucode-common-types';
import { TCPMsg, BufferEncoding, SocketConnectOpts, TCPEventType } from '../../ucodelink';
import { ConnectionOptionsType } from './types';
/**
 * 部分socket事件
 */
declare type SocketEventType = {
    type: TCPEventType.drain | TCPEventType.end | TCPEventType.lookup | TCPEventType.ready | TCPEventType.timeout;
    data?: {
        err: Error;
        address: string;
        family: string | number;
        host: string;
    };
};
/**
 * TCP客户端连接器。有抽象方法，即需要子类实现获取设备信息的方法。
 */
export declare abstract class TCPClientConnection implements DeviceConnectionInterface {
    static LogDomain: string;
    connectStatus: EConnectStatus;
    readonly deviceType?: DeviceType | undefined;
    private _queue?;
    private _dataEvent;
    private _socketEvent;
    readonly eventbus: DeviceEventbusInterface;
    private _tcp?;
    private readonly DEFAULT_QUEUE_INTERVAL;
    /**
     * 连接器配置
     */
    private options?;
    /**
     * 连接超时
     */
    private _connectTimeout?;
    /**
     * tcp 构造函数
     * @param args uCode 初始化的时候会注入的函数或者变量
     */
    constructor(injectArgs: HardwareDeviceConstructorArgumentType<ConnectionOptionsType>);
    private _startQueue;
    private _stopQueue;
    private _bindTCPEvent;
    private _unbindTCPEvent;
    /**
     * 创建TCP客户端，设置参数
     */
    initTcp(): Promise<void>;
    /**
     * 设置TCP对象参数
     */
    _setOptions(): Promise<void>;
    /**
     * 当TCP断开连接
     */
    protected onClose(): void;
    /**
     * 当TCP出现error
     */
    protected onError(error: any): Promise<void>;
    /**
     * 当TCP连接完成
     */
    protected onConnect(): void;
    /**
     * 接收数据
     * @param msg 数据，buffer 或 string 格式
     * @param rinfo socket远程地址
     */
    protected onReceived(msg: Buffer | string): Promise<void>;
    protected onDrain(): void;
    protected onEnd(): void;
    protected onLookup(err: Error, address: string, family: string | number, host: string): void;
    protected onReady(): void;
    protected onTimeout(): void;
    /**
     * 连接状态
     */
    isConnected(): boolean;
    /**
     * connect目的是为了设置port和address，用于send参数。
     */
    connect(device: IDiscoverDevice): Promise<void>;
    /**
     * 需要子类实现
     * @param device 连接的设备对象, 数据是从 discover 传过来的，怎么解析需要子类实现
     * @returns {SocketConnectOpts} 用于通信的端口和地址
     */
    protected abstract getDeviceInfo(device: IDiscoverDevice): Promise<SocketConnectOpts> | SocketConnectOpts;
    /**
     * 断开连接
     */
    disconnect(): Promise<void>;
    /**
     * 析构
     */
    destroy(): Promise<void>;
    /**
     * tcp 连接之后的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    afterConnect(): Promise<void>;
    /**
     * tcp 连接之前的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    beforeConnect(): Promise<void>;
    /**
     * 断开连接之前的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    beforeDisconnect(): Promise<void>;
    /**
     * 断开连接之后的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    afterDisconnect(): Promise<void>;
    /**
     * 销毁前的钩子
     * 该方法在执行断开之前执行，可以用于发送指令
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    beforeDestroy(): Promise<void>;
    /**
     * 监听数据事件
     * @param listener 监听callback
     * @returns Disposal
     */
    onData(listener: (data: Buffer | string) => void): import("@ubt/typedevent").Disposable;
    /**
     * 一些tcp socket事件，包括drain, end, lookup, ready, timeout事件
     * @param listener
     * @returns
     */
    onSocketEvent(listener: (data?: SocketEventType) => void): import("@ubt/typedevent").Disposable;
    /**
     * 数据发送
     * @param msg 数据
     * @param isTopPriority 是否为最高优先级指令。如停止指令，不进入队列，直接发送并清空队列
     * @param options tcp发送选项
     * @returns 返回已发送的数据字节数
     */
    write(msg: TCPMsg, isTopPriority?: boolean, encoding?: BufferEncoding): Promise<number | {
        error?: Error;
        flushed: boolean;
    }>;
}
export {};
