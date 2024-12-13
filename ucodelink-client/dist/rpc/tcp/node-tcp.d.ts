export class NodeTCP extends BaseRPCAdapter {
    constructor(rpcClient: any);
    /**
     * events.EventEmitter
     * override 事件接口, typecheck设置
     */
    _originOn: (event: string | symbol, listener: (...args: any[]) => void) => BaseRPCAdapter;
    _originOnce: (event: string | symbol, listener: (...args: any[]) => void) => BaseRPCAdapter;
    _originEmit: (event: string | symbol, ...args: any[]) => boolean;
    _originaddListener: (event: string | symbol, listener: (...args: any[]) => void) => BaseRPCAdapter;
    initRpcServerEvent(): void;
    initRpcClientEvent(): void;
    /**
     * 监听tcp server事件
     * @param eventType
     * @param args
     */
    _rpcListenTCPServerFn(eventType: any, ...args: any[]): void;
    _clientSocketId: any;
    /**
     * 监听tcp client事件
     * @param eventType
     * @param args
     */
    _rpcListenTCPClientFn(eventType: any, ...args: any[]): void;
    /**
     * 创建TCP服务端
     * @param options
     * @returns
     */
    createServer(options: any): Promise<any>;
    _serverSocketId: any;
    addressOfServer(): Promise<any>;
    close(): Promise<any>;
    listen(options: any): Promise<any>;
    getConnections(): Promise<any>;
    setMaxConnections(maxConnections: any): Promise<any>;
    getMaxConnections(): Promise<any>;
    isListening(): Promise<any>;
    createSocket(options: any): Promise<any>;
    connect(options: any): Promise<any>;
    destroySocket(): Promise<any>;
    isDestroyed(): Promise<any>;
    end(strOrBuffer: any, encoding: any): Promise<any>;
    pause(): Promise<any>;
    resume(): Promise<any>;
    setEncoding(encoding: any): Promise<any>;
    setKeepAlive(enable: any, initialDelay: any): Promise<any>;
    setNoDelay(noDelay: any): Promise<any>;
    setTimeout(timeout: any): Promise<any>;
    write(strOrBuffer: any, encoding: any): Promise<any>;
    addressOfSocket(): Promise<any>;
    getBytesRead(): Promise<any>;
    getBytesWritten(): Promise<any>;
    isConnecting(): Promise<any>;
}
export namespace NodeTCP {
    const subDomain: string;
}
import { BaseRPCAdapter } from "../base";
