export class NodeUDP extends BaseRPCAdapter {
    constructor(rpcClient: any);
    /**
     * events.EventEmitter
     * 1. close
     * 2. connect
     * 3. error
     * 4. listening
     * 5. message
     *
     * override 事件接口, typecheck设置
     */
    _originOn: (event: string | symbol, listener: (...args: any[]) => void) => BaseRPCAdapter;
    _originOnce: (event: string | symbol, listener: (...args: any[]) => void) => BaseRPCAdapter;
    _originEmit: (event: string | symbol, ...args: any[]) => boolean;
    _originaddListener: (event: string | symbol, listener: (...args: any[]) => void) => BaseRPCAdapter;
    initRpcEvent(): void;
    _rpcListenUDPFn(eventType: any, ...args: any[]): void;
    createSocket(options: any): Promise<any>;
    _socketId: any;
    bind(port: any, address: any): Promise<any>;
    getLocalAddress(): Promise<any>;
    getRemoteAddress(): Promise<any>;
    send(msg: any, options: any): Promise<any>;
    setMulticastInterface(multicastInterface: any): Promise<any>;
    setMulticastLoopback(flag: any): Promise<any>;
    setMulticastTTL(ttl: any): Promise<any>;
    setRecvBufferSize(size: any): Promise<any>;
    setSendBufferSize(size: any): Promise<any>;
    connect(): Promise<any>;
    close(): Promise<any>;
    addMembership(multicastAddress: any, multicastInterface: any): Promise<any>;
    dropMembership(multicastAddress: any, multicastInterface: any): Promise<any>;
    setBroadcast(flag: any): Promise<any>;
    setTTL(ttl: any): Promise<any>;
}
import { BaseRPCAdapter } from "../base";
