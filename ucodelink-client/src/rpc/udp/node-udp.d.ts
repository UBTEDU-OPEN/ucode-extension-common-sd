import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { AddressInfo } from '../../types/socket';
import { BaseRPCAdapter } from '../base';
import { IUdp, UDPConstructorOptions, UDPSocketType, UDPEvents, UDPMsg } from './interface';
export declare class NodeUDP extends BaseRPCAdapter implements IUdp {
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
    private _originOn;
    private _originOnce;
    private _originEmit;
    private _originaddListener;
    on: <K extends keyof UDPEvents>(event: K, listener: UDPEvents[K]) => this;
    once: <K extends keyof UDPEvents>(event: K, listener: UDPEvents[K]) => this;
    addListener: <K extends keyof UDPEvents>(event: K, listener: UDPEvents[K]) => this;
    emit: <K extends keyof UDPEvents>(event: K, ...args: Parameters<UDPEvents[K]>) => boolean;
    private _socketId?;
    constructor(rpcClient?: RpcClient);
    private initRpcEvent;
    private _rpcListenUDPFn;
    rpcCloseHandler(): void;
    createSocket(options: UDPConstructorOptions | UDPSocketType): Promise<string>;
    bind(port?: number, address?: string): Promise<AddressInfo>;
    getLocalAddress(): Promise<AddressInfo>;
    getRemoteAddress(): Promise<AddressInfo>;
    send(msg: UDPMsg, options: {
        port?: number | undefined;
        address?: string | undefined;
        offset?: number | undefined;
        length?: number | undefined;
    }): Promise<number>;
    setMulticastInterface(multicastInterface: string): Promise<void>;
    setMulticastLoopback(flag: boolean): Promise<void>;
    setMulticastTTL(ttl: number): Promise<void>;
    setRecvBufferSize(size: number): Promise<void>;
    setSendBufferSize(size: number): Promise<void>;
    connect(): Promise<void>;
    close(): Promise<void>;
    addMembership(multicastAddress: string, multicastInterface?: string): Promise<void>;
    dropMembership(multicastAddress: string, multicastInterface?: string): Promise<void>;
    setBroadcast(flag: boolean): Promise<void>;
    setTTL(ttl: number): Promise<void>;
}
