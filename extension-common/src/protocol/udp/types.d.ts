/// <reference types="node" />
import type { QueueConstructorType } from '@ubt/ucode-utils/dist/queue';
import { UDPMsg } from '../../ucodelink';
export declare enum UDPSocketType {
    udp4 = "udp4",
    udp6 = "udp6"
}
export interface LookupOptions {
    family?: number | undefined;
    hints?: number | undefined;
    verbatim?: boolean | undefined;
    all?: false | undefined;
}
export interface UDPConstructorOptions {
    type: UDPSocketType;
    reuseAddr?: boolean | undefined;
    /**
     * @default false
     */
    ipv6Only?: boolean | undefined;
    recvBufferSize?: number | undefined;
    sendBufferSize?: number | undefined;
    lookup?: ((hostname: string, options: LookupOptions, callback: (err: any | null, address: string, family: number) => void) => void) | undefined;
}
export declare type UDPRegisterOptions = {
    /**
     * UDP创建socket时构造函数的参数
     */
    udpConstructorOptions: UDPConstructorOptions | UDPSocketType;
    /**
     * 发消息来触发设备回应？
     */
    sendMsgForDiscover?: UDPMsg;
    /**
     * 收到消息后，发送一条固定的消息回应？
     */
    sendMsgForResponse?: UDPMsg;
    /**
     * 监听消息时，绑定的端口
     */
    bindPort?: number;
    /**
     * 监听消息时，绑定的地址
     */
    bindAddress?: string;
    /**
     * 发送消息时，发送数据的端口
     */
    sendPort?: number;
    /**
     * 发送消息时，发送数据的地址
     */
    sendAddress?: string;
    /**
     * 设置广播？
     */
    isBroadcast?: boolean;
    /**
     * 设置 IP_TTL 选项
     */
    ttl?: number;
    /**
     * 设置或取消 IP_MULTICAST_LOOP 选项
     */
    multicastLoopback?: boolean;
    /**
     * 将套接字的默认传出多播接口设置为所选接口或返回系统接口选择
     */
    multicastInterface?: string;
    /**
     * 自定义设备名，可以从socket数据中加工出新名字
     */
    customDeviceName?: (deviceData: DiscoverDeviceData) => string;
    /**
     * 设置 IP_MULTICAST_TTL 选项
     */
    multicastTTL?: number;
    /**
     * 设置接收消息的缓存大小
     */
    recvBufferSize?: number;
    /**
     * 设置发送消息的缓存大小
     */
    sendBufferSize?: number;
    /**
     * 设置多播地址，在 addMembership 或 dropMembership 使用
     */
    multicastAddress?: string;
    /**
     * 扫描超时
     */
    scanTime?: number;
    /**
     * 队列参数，可以设置 队列 发送的 间隔 或者 数量
     */
    queueOptions?: QueueConstructorType;
};
/**
 * 搜索设备时，设备对象中包含的data数据，会在connection时使用
 */
export declare type DiscoverDeviceData = {
    buffer: Buffer;
    port?: number;
    address?: string;
};
