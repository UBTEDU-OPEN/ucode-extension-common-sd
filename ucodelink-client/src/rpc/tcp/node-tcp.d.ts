import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { AddressInfo } from '../../types/socket';
import { BaseRPCAdapter } from '../base';
import { ServerOpts, ListenOptions, ITcp, TCPEvents, BufferEncoding, SocketConstructorOpts, SocketConnectOpts } from './interface';
export declare class NodeTCP extends BaseRPCAdapter implements ITcp {
    static subDomain: string;
    /**
     * events.EventEmitter
     * override 事件接口, typecheck设置
     */
    private _originOn;
    private _originOnce;
    private _originEmit;
    private _originaddListener;
    on: <K extends keyof TCPEvents>(event: K, listener: TCPEvents[K]) => this;
    once: <K extends keyof TCPEvents>(event: K, listener: TCPEvents[K]) => this;
    addListener: <K extends keyof TCPEvents>(event: K, listener: TCPEvents[K]) => this;
    emit: <K extends keyof TCPEvents>(event: K, ...args: Parameters<TCPEvents[K]>) => boolean;
    /**
     * 当前使用的服务端socket对象id，在ucodelink中生成。
     */
    private _serverSocketId?;
    /**
     * 当前使用的客户端socket对象id，在ucodelink中生成。
     */
    private _clientSocketId?;
    constructor(rpcClient?: RpcClient);
    private initRpcServerEvent;
    private initRpcClientEvent;
    /**
     * 监听tcp server事件
     * @param eventType
     * @param args
     */
    private _rpcListenTCPServerFn;
    /**
     * 监听tcp client事件
     * @param eventType
     * @param args
     */
    private _rpcListenTCPClientFn;
    rpcCloseHandler(): void;
    /**
     * 创建TCP服务端
     * @param options
     * @returns
     */
    createServer(options?: ServerOpts): Promise<string>;
    addressOfServer(): Promise<AddressInfo>;
    close(): Promise<Error | undefined>;
    listen(options?: ListenOptions): Promise<void>;
    getConnections(): Promise<{
        error: Error | null;
        count: number;
    }>;
    setMaxConnections(maxConnections: number): Promise<void>;
    getMaxConnections(): Promise<number>;
    isListening(): Promise<boolean>;
    createSocket(options?: SocketConstructorOpts): Promise<string>;
    connect(options?: SocketConnectOpts): Promise<void>;
    destroySocket(): Promise<Error | undefined>;
    isDestroyed(): Promise<boolean>;
    end(strOrBuffer?: string | Uint8Array, encoding?: BufferEncoding): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    setEncoding(encoding?: BufferEncoding): Promise<void>;
    setKeepAlive(enable?: boolean, initialDelay?: number): Promise<void>;
    setNoDelay(noDelay?: boolean): Promise<void>;
    setTimeout(timeout: number): Promise<void>;
    write(strOrBuffer: string | Uint8Array, encoding?: BufferEncoding): Promise<{
        error: Error | undefined;
        flushed: boolean;
    }>;
    addressOfSocket(): Promise<AddressInfo>;
    getBytesRead(): Promise<number>;
    getBytesWritten(): Promise<number>;
    isConnecting(): Promise<boolean>;
}
