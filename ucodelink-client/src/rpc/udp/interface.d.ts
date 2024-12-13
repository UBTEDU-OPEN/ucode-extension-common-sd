/// <reference types="node" />
import { AddressInfo, ErrnoException, LookupOneOptions } from '../../types/socket';
export declare type UDPSocketType = 'udp4' | 'udp6';
export interface UDPConstructorOptions {
    type: UDPSocketType;
    reuseAddr?: boolean;
    /**
     * @default false
     */
    ipv6Only?: boolean;
    recvBufferSize?: number;
    sendBufferSize?: number;
    lookup?: (hostname: string, options: LookupOneOptions, callback: (err: ErrnoException | null, address: string, family: number) => void) => void;
}
export interface UDPEvents {
    /**
     * 在使用 close() 关闭套接字后会触发 'close' 事件。 一旦触发，则此套接字上将不会触发新的 'message' 事件。
     */
    close: () => void;
    /**
     * 'connect' 事件在套接字关联到远程地址作为成功的 connect() 调用的结果之后触发。
     */
    connect: () => void;
    /**
     * 每当发生任何错误时都会触发 'error' 事件。 事件句柄被传入单一的 Error 对象。
     */
    error: (err: Error) => void;
    /**
     * 一旦 Socket 可寻址并且可以接收数据，则会触发 'listening' 事件。
     * 这会在 bind() 中显式地发生，或者在第一次使用 send() 发送数据时隐式地发生。直到 Socket 正在监听，底层系统资源不存在，则调用 setTTL() 等将失败。
     */
    listening: () => void;
    /**
     * 当套接字上有新的数据报可用时，则会触发 'message' 事件。 事件句柄传入了两个参数：msg 和 rinfo。
     * 如果传入数据包的源地址是 IPv6 链路本地地址，则将接口名称添加到 address。
     * 例如，在 en0 接口上接收的数据包可能将地址字段设置为 'fe80::2618:1234:ab11:3b9c%en0'，其中 '%en0' 是作为区域 ID 后缀的接口名称。
     * @param msg Buffer 消息。
     * @param rinfo AddressInfo 远程地址信息
     */
    message: (msg: Buffer, rinfo: AddressInfo) => void;
}
export declare type UDPSendOptionsType = {
    port?: number;
    address?: string;
    offset?: number;
    length?: number;
};
export declare type UDPMsg = string | Uint8Array | ReadonlyArray<any>;
/**
 * UDP 适配接口
 */
export interface IUdp {
    on: <K extends keyof UDPEvents>(event: K, listener: UDPEvents[K]) => void;
    once: <K extends keyof UDPEvents>(event: K, listener: UDPEvents[K]) => void;
    addListener: <K extends keyof UDPEvents>(event: K, listener: UDPEvents[K]) => void;
    emit: <K extends keyof UDPEvents>(event: K, ...args: Parameters<UDPEvents[K]>) => void;
    /**
     * 创建 UDP socket 实例
     * @param options 可选，创建Socket时的构造函数参数
     * @returns 异步返回 socket ID。ID由底层（nodejs端、mobile端、chromeos端分配）
     */
    createSocket(options?: UDPConstructorOptions | UDPSocketType): Promise<string>;
    /**
     * 对于 UDP 套接字，使 Socket 在命名的 port 和可选的 address 上监听数据报消息。
     * 如果未指定 port 或 0，则操作系统将尝试绑定到随机端口。如果未指定 address，则操作系统将尝试监听所有地址。 一旦绑定完成，则会触发 'listening' 事件
     * @param port 可选，本地端口号。没指定时自动分配。
     * @param address 可选，本地IP或域名。
     * @returns 异步返回 AddressInfo 本地地址信息
     */
    bind(port?: number, address?: string): Promise<AddressInfo>;
    /**
     * 返回包含套接字地址信息的对象。 对于 UDP 套接字，此对象将包含 address、family 和 port 属性。如果在未绑定的套接字上调用此方法将抛出 EBADF。
     * @returns 异步返回 AddressInfo 本地地址信息
     */
    getLocalAddress(): Promise<AddressInfo>;
    /**
     * 返回包含远程端点的 address、family 和 port 的对象。如果未连接，抛出 ERR_SOCKET_DGRAM_NOT_CONNECTED 异常
     * @returns 异步返回 AddressInfo 本地地址信息
     */
    getRemoteAddress(): Promise<AddressInfo>;
    /**
     * 关联远程地址和端口。关联后，发送数据无需指定端口和地址。
     * @param port 必选，指定端口号
     * @param address 可选，远程IP或域名。
     */
    connect(port: number, address?: string): Promise<void>;
    /**
     * 关闭底层套接字并停止监听其上的数据。 如果提供回调，则将其添加为 'close' 事件的监听器。
     */
    close(): Promise<void>;
    /**
     * 在套接字上广播数据报。对于无连接套接字，则必须指定目标 port 和 address。另一方面，已连接的套接字将使用其关联的远程端点，因此不得设置 port 和 address 参数。
     * @param msg 必选，包含要发送的消息，字符串或buffer数组
     * @param options 可选，发送接口的参数
     * @returns 已发送的字节数
     */
    send(msg: UDPMsg, options?: UDPSendOptionsType): Promise<number>;
    /**
     * 加入多播组
     * @param multicastAddress 必选，多播组地址
     * @param multicastInterface 可选，加入多播组的接口。网卡
     */
    addMembership(multicastAddress: string, multicastInterface?: string): Promise<void>;
    /**
     * 退出多播组
     * @param multicastAddress 必选，多播组地址
     * @param multicastInterface 可选，加入多播组的接口。网卡
     */
    dropMembership(multicastAddress: string, multicastInterface?: string): Promise<void>;
    /**
     * 设置是否广播
     * @param flag 必选，设置是否广播
     */
    setBroadcast(flag: boolean): Promise<void>;
    /**
     * 设置广播/多播接口，网卡
     * @param multicastInterface 必选，网络接口（网卡）名称
     */
    setMulticastInterface(multicastInterface: string): Promise<void>;
    /**
     * 设置或清除 IP_MULTICAST_LOOP 套接字选项。
     * 当设置为 true 时，本地接口也会收到多播数据包。如果在未绑定的套接字上调用此方法将抛出 EBADF。
     * @param flag 必选，是否开启loopback
     */
    setMulticastLoopback(flag: boolean): Promise<void>;
    /**
     * 设置 IP_MULTICAST_TTL socket参数(TTL for Time to Live)。
     * @param ttl 必选，ttl参数范围0-255，大部分系统默认为1
     */
    setMulticastTTL(ttl: number): Promise<void>;
    /**
     * 设置 SO_RCVBUF 套接字选项。设置最大套接字接收缓冲区（以字节为单位）。
     * 如果在未绑定的套接字上调用此方法将抛出 ERR_SOCKET_BUFFER_SIZE。
     * @param size 必选，缓存大小
     */
    setRecvBufferSize(size: number): Promise<void>;
    /**
     * 设置 SO_SNDBUF 套接字选项。设置最大套接字发送缓冲区（以字节为单位）。
     * @param size 必选，缓存大小
     */
    setSendBufferSize(size: number): Promise<void>;
    /**
     * 设置 IP_TTL socket参数。如果socket未绑定地址，会抛出 EBADF 异常
     * @param ttl 必选，ttl参数范围1-255，大部分系统默认为64
     */
    setTTL(ttl: number): Promise<void>;
}
export declare enum UDPEventType {
    /**
     * 在使用 close() 关闭套接字后会触发 'close' 事件。 一旦触发，则此套接字上将不会触发新的 'message' 事件。
     */
    close = "close",
    /**
     * 'connect' 事件在套接字关联到远程地址作为成功的 connect() 调用的结果之后触发。
     */
    connect = "connect",
    /**
     * 每当发生任何错误时都会触发 'error' 事件。 事件句柄被传入单一的 Error 对象。
     */
    error = "error",
    /**
     * 一旦 Socket 可寻址并且可以接收数据，则会触发 'listening' 事件。
     * 这会在 bind() 中显式地发生，或者在第一次使用 send() 发送数据时隐式地发生。直到 Socket 正在监听，底层系统资源不存在，则调用 setTTL() 等将失败。
     */
    listening = "listening",
    /**
     * 当套接字上有新的数据报可用时，则会触发 'message' 事件。 事件句柄传入了两个参数：msg 和 rinfo。
     * 如果传入数据包的源地址是 IPv6 链路本地地址，则将接口名称添加到 address。
     * 例如，在 en0 接口上接收的数据包可能将地址字段设置为 'fe80::2618:1234:ab11:3b9c%en0'，其中 '%en0' 是作为区域 ID 后缀的接口名称。
     */
    message = "message"
}
