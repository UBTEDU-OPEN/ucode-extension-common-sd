/// <reference types="node" />
import { EConnectStatus } from '@ubt/ucode-utils/dist/constant';
import type { DeviceEventbusInterface, IDiscoverDevice, DeviceType, DeviceConnectionInterface, HardwareDeviceConstructorArgumentType } from '@ubt/ucode-common-types';
import { AddressInfo, UDPSendOptionsType, UDPMsg } from '../../ucodelink';
import { UDPRegisterOptions } from './types';
/**
 * UDP连接器，基于UDP进行连接、数据通信
 */
export declare class UDPDeviceConnection implements DeviceConnectionInterface {
    connectStatus: EConnectStatus;
    readonly deviceType?: DeviceType | undefined;
    private _queue?;
    private _dataEvent;
    readonly eventbus: DeviceEventbusInterface;
    private _udp?;
    private readonly DEFAULT_QUEUE_INTERVAL;
    private _port?;
    private _address?;
    protected socketoptions?: UDPRegisterOptions;
    /**
     * udp 构造函数
     * @param args uCode 初始化的时候会注入的函数或者变量
     */
    constructor(injectArgs: HardwareDeviceConstructorArgumentType<UDPRegisterOptions>);
    private _startQueue;
    private _stopQueue;
    /**
     * 连接状态
     */
    isConnected(): boolean;
    _onConnect(): void;
    /**
     * 这里 UDP connect 目的是为了设置port和address，用于后续作为send参数。
     */
    connect(device: IDiscoverDevice): Promise<void>;
    _bindUDPEvent(): void;
    _unbindUDPEvent(): void;
    initSocket(): Promise<void>;
    /**
     * 设置UDP对象参数
     */
    _setOptions(): Promise<void>;
    /**
     * 接收数据
     * @param msg 数据，buffer格式
     * @param rinfo socket远程地址
     */
    _onReceived(msg: Buffer, rinfo: AddressInfo): Promise<void>;
    /**
     * bind后监听事件
     */
    _onListening(): Promise<void>;
    _onError(error: any): Promise<void>;
    _onClose(): void;
    /**
     * 断开连接
     */
    disconnect(): Promise<void>;
    /**
     * 析构
     */
    destroy(): Promise<void>;
    /**
     * udp 连接之后的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    afterConnect(): Promise<void>;
    /**
     * udp 连接之前的钩子
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
    onData(listener: (data: UDPMsg) => void): import("@ubt/typedevent").Disposable;
    /**
     * 数据发送
     * @param msg 数据
     * @param isTopPriority 是否为最高优先级指令。如停止指令，不进入队列，直接发送并清空队列
     * @param options udp发送选项
     * @returns 返回已发送的数据字节数
     */
    send(msg: UDPMsg, isTopPriority?: boolean, options?: UDPSendOptionsType): Promise<number>;
}
