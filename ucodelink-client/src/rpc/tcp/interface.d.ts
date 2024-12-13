/// <reference types="node" />
import { AddressInfo, LookupFunction } from '../../types/socket';
export interface ServerOpts {
    /**
     * Indicates whether half-opened TCP connections are allowed.
     * @default false
     */
    allowHalfOpen?: boolean;
    /**
     * Indicates whether the socket should be paused on incoming connections.
     * @default false
     */
    pauseOnConnect?: boolean;
}
export interface Abortable {
    /**
     * When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
     */
    signal?: AbortSignal;
}
export interface ListenOptions extends Abortable {
    port?: number;
    host?: string;
    backlog?: number;
    path?: string;
    exclusive?: boolean;
    readableAll?: boolean;
    writableAll?: boolean;
    /**
     * @default false
     */
    ipv6Only?: boolean;
}
export interface SocketConstructorOpts {
    fd?: number;
    allowHalfOpen?: boolean;
    readable?: boolean;
    writable?: boolean;
}
interface OnReadOpts {
    buffer: Uint8Array | (() => Uint8Array);
    /**
     * This function is called for every chunk of incoming data.
     * Two arguments are passed to it: the number of bytes written to buffer and a reference to buffer.
     * Return false from this function to implicitly pause() the socket.
     */
    callback(bytesWritten: number, buf: Uint8Array): boolean;
}
export declare type SocketConnectOpts = {
    port: number;
    host?: string;
    localAddress?: string;
    localPort?: number;
    hints?: number;
    family?: number;
    lookup?: LookupFunction;
    onread?: OnReadOpts;
    path?: string;
};
export interface TCPEvents {
    /**
     * 服务器: 关闭时触发。 如果连接存在，则在所有连接结束之前不会触发此事件。
     * 客户端: 一旦套接字完全关闭就触发。 参数 hadError 是布尔值，表示套接字是否由于传输错误而关闭。
     */
    close: (had_error?: boolean) => void;
    /**
     * 当socket 出现error时
     */
    error: (err: Error) => void;
    /**
     * 当有socket连接时
     */
    connection: (socketId: string) => void;
    /**
     * 当server监听时
     */
    listening: () => void;
    /**
     * 当成功建立套接字连接时触发。
     */
    connect: () => void;
    /**
     * 接收到数据时触发。 参数 data 将是 Buffer 或 String。
     */
    data: (data: Buffer | string) => void;
    /**
     * 当写缓冲区变空时触发。可用于限制上传。
     */
    drain: () => void;
    /**
     * 当套接字的另一端表示传输结束时触发，从而结束套接字的可读端。
     * 默认情况下（allowHalfOpen 是 false）套接字将发送传输结束数据包，并在写出其挂起的写入队列后销毁其文件描述符。
     * 但是，如果 allowHalfOpen 设置为 true，套接字将不会自动将其可写端 end()，从而允许用户写入任意数量的数据。 用户必须显式调用 end() 来关闭连接（即发回一个 FIN 数据包）。
     */
    end: () => void;
    /**
     * 在解析主机名之后但在连接之前触发。 不适用于 Unix 套接字。
     * @param err Error | null 错误对象。 参见 dns.lookup()。
     * @param address string IP 地址。
     * @param family string | null 地址类型。 参见 dns.lookup()。
     * @param host string 主机名。
     */
    lookup: (err: Error, address: string, family: string | number, host: string) => void;
    /**
     * 当套接字准备好使用时触发。
     * 'connect' 后立即触发。
     */
    ready: () => void;
    /**
     * 如果套接字因不活动而超时则触发。 这只是通知套接字已空闲。 用户必须手动关闭连接。
     */
    timeout: () => void;
}
export interface ITcp {
    on: <K extends keyof TCPEvents>(event: K, listener: TCPEvents[K]) => void;
    once: <K extends keyof TCPEvents>(event: K, listener: TCPEvents[K]) => void;
    addListener: <K extends keyof TCPEvents>(event: K, listener: TCPEvents[K]) => void;
    emit: <K extends keyof TCPEvents>(event: K, ...args: Parameters<TCPEvents[K]>) => void;
    /**
     * 创建新的TCP服务
     * @param options server socket构建函数参数
     * @returns 新创建的server socket ID，以代表 server socket 引用
     */
    createServer(options?: ServerOpts): Promise<string>;
    /**
     * 如果监听 IP 套接字，则返回操作系统报告的服务器的绑定 address、地址 family 名称和 port（用于在获取操作系统分配的地址时查找分配的端口）：{ port: 12346, family: 'IPv4', address: '127.0.0.1' }。
     * @returns 返回绑定的地址信息
     */
    addressOfServer(): Promise<AddressInfo>;
    /**
     * 停止服务器接受新连接并保持现有连接。
     * @returns 异步返回结果，如果close有错误返回错误
     */
    close(): Promise<Error | undefined>;
    /**
     * 启动监听连接的服务器。
     * @param options 监听函数的参数
     */
    listen(options?: ListenOptions): Promise<void>;
    /**
     * 异步获取服务器上的并发连接数。
     * @returns 返回连接数或错误 { error: Error | null; count: number }
     */
    getConnections(): Promise<{
        error: Error | null;
        count: number;
    }>;
    /**
     * 设置最大连接数
     * @param maxConnections 最大连接数
     */
    setMaxConnections(maxConnections: number): Promise<void>;
    /**
     * 设置此属性以在服务器的连接计数变高时拒绝连接。
     * @returns 最大连接数
     */
    getMaxConnections(): Promise<number>;
    /**
     * 服务器是否正在监听连接
     * @returns
     */
    isListening(): Promise<boolean>;
    /**
     * 创建新的套接字对象。TCP 客户端
     * @param options 创建socket的构造函数参数
     * @returns 新创建的socket ID，以代表 Socket 引用
     */
    createSocket(options?: SocketConstructorOpts): Promise<string>;
    /**
     * 在给定的套接字上发起连接。
     * 建立连接后，将触发 'connect' 事件。如果连接出现问题，则将触发 'error' 事件并将错误传给 'error' 监听器，而不是触发 'connect' 事件。
     * @param options 连接函数的参数
     */
    connect(options?: SocketConnectOpts): Promise<void>;
    /**
     * 确保此套接字上不再发生 I/O 活动。 销毁流并关闭连接。
     * @returns 返回错误或undefined
     */
    destroySocket(): Promise<Error | undefined>;
    /**
     * 指示连接是否被销毁。一旦连接被销毁，就不能再使用它传输数据。
     * @returns 是否已经销毁？true，已经销毁；false，未销毁
     */
    isDestroyed(): Promise<boolean>;
    /**
     * 半关闭套接字，即，它发送一个 FIN 数据包。因TCP是全双工的，关闭了客户端发往服务端的通道，但服务端仍可以发消息给客户端
     * @param strOrBuffer 数据
     * @param encoding 数据的编码
     */
    end(strOrBuffer?: Uint8Array | string, encoding?: BufferEncoding): Promise<void>;
    /**
     * 暂停读取数据。 也就是说，不会触发 'data' 事件。 用于限制上传。
     */
    pause(): Promise<void>;
    /**
     * 调用 pause() 后的继续（恢复）读取。
     */
    resume(): Promise<void>;
    /**
     * 设置流数据编码
     * @param encoding
     */
    setEncoding(encoding?: BufferEncoding): Promise<void>;
    /**
     * 启用/禁用keepAlive功能，并可选择设置在空闲套接字上发送第一个keepAlive探测之前的初始延迟。
     * @param enable 默认false
     * @param initialDelay 设置initialDelay（以毫秒为单位）设置接收到的最后一个数据包和第一个keepalive探测之间的延迟。默认0
     */
    setKeepAlive(enable?: boolean, initialDelay?: number): Promise<void>;
    /**
     * 启用/禁用 Nagle 算法的使用。创建 TCP 连接时，它将启用 Nagle 算法。
     * Nagle 的算法在数据通过网络发送之前延迟数据。 它试图以延迟为代价来优化吞吐量。
     * @param noDelay 默认true
     */
    setNoDelay(noDelay?: boolean): Promise<void>;
    /**
     * 将套接字设置为在套接字上 timeout 毫秒不活动后超时。
     * @param timeout 毫秒为单位。默认无timeout
     */
    setTimeout(timeout: number): Promise<void>;
    /**
     * 在套接字上发送数据。 第二个参数指定字符串情况下的编码。 它默认为 UTF8 编码。
     * 如果整个数据被成功刷新到内核缓冲区，则返回 flushed: true。 如果所有或部分数据在用户内存中排队，则返回 flushed: false。当缓冲区再次空闲时，将触发 'drain'。
     * @param strOrBuffer 写入数据
     * @param encoding 数据编码
     * @returns { error: Error | undefined; flushed: boolean } error：错误信息，flushed：是否整个数据已成功刷新到内核缓冲区
     */
    write(strOrBuffer: Uint8Array | string, encoding?: BufferEncoding): Promise<{
        error: Error | undefined;
        flushed: boolean;
    }>;
    /**
     * 返回操作系统报告的绑定 address、地址 family 名称和套接字的 port：{ port: 12346, family: 'IPv4', address: '127.0.0.1' }
     * @returns 地址信息
     */
    addressOfSocket(): Promise<AddressInfo>;
    /**
     * 获取接收的流字节数
     * @returns 字节数
     */
    getBytesRead(): Promise<number>;
    /**
     * 获取发送的流字节数
     * @returns 字节数
     */
    getBytesWritten(): Promise<number>;
    /**
     * 正在连接中？如果 true，则 connect() 已被调用且尚未完成。它将保持 true 直到套接字连接，然后将其设置为 false 并触发 'connect' 事件。
     * @returns 是否正在连接
     */
    isConnecting(): Promise<boolean>;
}
export declare enum TCPEventType {
    /**
     * 服务器关闭时触发。 如果连接存在，则在所有连接结束之前不会触发此事件。
     */
    close = "close",
    /**
     * 发生错误时触发。
     */
    error = "error",
    /**
     * 建立新连接时触发。
     */
    connection = "connection",
    /**
     * 在调用 listen() 后绑定服务器时触发
     */
    listening = "listening",
    /**
     * 当成功建立套接字连接时触发。
     */
    connect = "connect",
    /**
     * 接收到数据时触发。
     */
    data = "data",
    /**
     * 当写缓冲区变空时触发。 可用于限制上传。
     */
    drain = "drain",
    /**
     * 当套接字的另一端表示传输结束时触发，从而结束套接字的可读端。
     */
    end = "end",
    /**
     * 在解析主机名之后但在连接之前触发。 不适用于 Unix 套接字。
     */
    lookup = "lookup",
    /**
     * 当套接字准备好使用时触发。
     * 'connect' 后立即触发。
     */
    ready = "ready",
    /**
     * 如果套接字因不活动而超时则触发。 这只是通知套接字已空闲。 用户必须手动关闭连接。
     */
    timeout = "timeout"
}
/**
 * tcp消息类型
 */
export declare type TCPMsg = Uint8Array | string;
export declare type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';
export {};
