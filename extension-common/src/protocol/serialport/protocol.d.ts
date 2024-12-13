/// <reference types="node" />
import type { UCode, DeviceEventbusInterface, IDiscoverDevice, DeviceType, DeviceConnectionInterface, HardwareDeviceConstructorArgumentType } from '@ubt/ucode-common-types';
import { EConnectStatus } from '@ubt/ucode-utils/dist/constant/index';
import { SerialPort, SetOptions } from '../../ucodelink';
import { SerialPortRegisterOptions } from './common';
/**
 * 串口协议封装类
 * 该类实现了 `DeviceConnectionInterface` 接口
 *
 * ```javascript
 * import { CommonDevices } from "@ubtech/ucode-extension-common-sdk";
 *
 * const { SerialPortHardwareDevice, getSerialPortDeviceRegister } = CommonDevices.SerialPort;
 *
 * class DemoSerialPortHardwareDevice extends SerialPortHardwareDevice { // 继承 SerialPortHardwareDevice
 *   say(data) {
 *     this.send(Buffer.from(data));
 *   }
 * }
 * ```
 *
 */
export declare class SerialPortProtocol implements DeviceConnectionInterface {
    /** @sealed */
    connectStatus: EConnectStatus;
    private _sp?;
    private _spOptions?;
    private _queue?;
    private _dataEvent;
    readonly deviceType: DeviceType;
    readonly eventbus: DeviceEventbusInterface;
    protected options?: SerialPortRegisterOptions;
    protected _isReconnectAction: boolean;
    discoverDevice?: IDiscoverDevice;
    /**
     * @virtual
     * 判断串口连接是否断开, 默认我们会走标准的流程, 如果你有特殊的流程, 你可以重写该方法
     */
    isConnected(): boolean;
    /**
     * 串口 构造函数
     * @param args uCode 初始化的时候会注入的函数或者变量
     */
    constructor(injectArgs: HardwareDeviceConstructorArgumentType<SerialPortRegisterOptions>);
    /**
     * @internal
     * 你可以获取到 串口实例，如果你不知道这个怎么使用，建议不要随便调用
     */
    get serialPort(): SerialPort | undefined;
    private _onConnect;
    /**
     * 串口连接
     * 我们不建议你重写该方法，如果你对连接前，或者连接后需要做处理，可以使用钩子：beforeConnect，或者 afterConnect
     * @sealed
     * @param device IDiscoverDevice
     * @returns Promise<void>
     */
    connect(device: IDiscoverDevice): Promise<void>;
    /**
     * 串口断开连接
     * 我们不建议你重写该方法，如果你对断开连接前，或者断开连接后需要处理，可以使用钩子：beforeDisconnect，或者 afterConnect
     * @sealed
     * @returns Promise<void>
     */
    disconnect(): Promise<void>;
    private _startQueue;
    private _stopQueue;
    /**
     * 数据发送
     * @param data 数据
     * @param isTopPriority 是否为最高优先级指令。如停止指令，不进入队列，直接发送并清空队列
     */
    send(data: string | Buffer, isTopPriority?: boolean, encoding?: UCode.DataEncoding): boolean;
    /**
     * 串口 连接之后的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    afterConnect(): Promise<void>;
    /**
     * 串口 连接之前的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    beforeConnect(): Promise<void>;
    /**
     * 串口 断开连接之前的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    beforeDisconnect(): Promise<void>;
    /**
     * 串口 断开连接之后的钩子
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    afterDisconnect(): Promise<void>;
    /**
     * 串口 销毁前的钩子
     * 该方法在执行串口断开之前执行，可以用于发送指令
     * 该方法可以被重写
     * @virtual
     * @returns Promise<void>
     */
    beforeDestroy(): Promise<void>;
    /**
     * 对串口设置一些全局设定
     * 具体可以参照：[SerialPort#Set](https://serialport.io/docs/8.x.x/api-stream#serialportset)
     * @param options SetOptions 串口 SetOptions
     * @param errorCallback
     */
    set(options: SetOptions, errorCallback: (err?: any) => void): void;
    /**
     * 清理 串口 缓存的读写缓冲区
     * 具体可以参照：[SerialPort#Flush](https://serialport.io/docs/8.x.x/api-stream#serialportflush)
     * @param callback
     */
    flush(callback: (err?: any) => void): void;
    /**
     * 等待所有的输出数据(缓冲区数据)被写入串口
     * 具体可以参照: [SerialPort#Drain](https://serialport.io/docs/8.x.x/api-stream#serialportdrain)
     * @param callback
     */
    drain(callback: (err?: any) => void): void;
    /**
     * 销毁 串口实例
     * @sealed
     * @returns Promise<void>
     */
    destroy(): Promise<void>;
    private destroySp;
    protected clearRequestQueue(): void;
    /**
     * 监听事件
     * @param listener 监听callback
     * @returns Disposable
     */
    onData(listener: (data: string | Buffer) => void): import("@ubt/typedevent").Disposable;
    /**  上传代码断开不发送消息给上层
     */
    disconnectNoEmit(): Promise<void>;
    private _connect;
    /** 上传代码结束后重连不发送消息给上层
     */
    connectNoEmit(): Promise<void>;
}
