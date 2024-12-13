/// <reference types="node" />
import type { QueueConstructorType } from '@ubt/ucode-utils/dist/queue';
import { DiscoverDeviceType } from '@ubt/ucode-common-types';
import { SocketConstructorOpts, BufferEncoding } from '../../ucodelink';
export declare type ConnectionOptionsType = {
    /**
     * 创建TCP socket时，传给构造函数的参数
     */
    tcpConstructorOptions?: SocketConstructorOpts;
    /**
     * 队列参数，可以设置 队列 发送的 间隔 或者 数量
     */
    queueOptions?: QueueConstructorType;
    /**
     * 设置数据编码，也可以在write中设置
     */
    encoding?: BufferEncoding;
    /**
     * 是否开启KeepAlive功能
     */
    keepAlive?: {
        enable: boolean;
        initialDelay?: number;
    };
    /**
     * 是否开启拥塞控制算法
     */
    noDelay?: boolean;
    /**
     * 设置inactive超时时长
     */
    timeout?: number;
    /**
     * 连接超时
     */
    connectTimeout?: number;
};
/**
 * register 函数参数 options 的类型
 */
export declare type RegisterOptionType<T> = {
    discoverOptions?: T;
    discoverDeviceType?: DiscoverDeviceType;
    connectionOptions: ConnectionOptionsType;
};
/**
 * 搜索设备时，设备对象中包含的data数据，会在connection时使用
 */
export declare type TCPDeviceAddressType = {
    buffer: Buffer;
    port?: number;
    address?: string;
};
