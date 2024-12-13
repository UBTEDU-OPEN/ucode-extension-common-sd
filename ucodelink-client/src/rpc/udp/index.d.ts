/// <reference types="node" />
import { EventEmitter } from 'events';
import { IUdp, UDPEvents, UDPSendOptionsType, UDPConstructorOptions, UDPSocketType, UDPMsg } from './interface';
import { AddressInfo } from '../../types/socket';
export declare class UDPAdapter extends EventEmitter implements IUdp {
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
    private _currentUdp;
    constructor();
    _bindEvents(): void;
    createSocket(options: UDPConstructorOptions | UDPSocketType): Promise<string>;
    bind(port?: number, address?: string): Promise<AddressInfo>;
    getLocalAddress(): Promise<AddressInfo>;
    getRemoteAddress(): Promise<AddressInfo>;
    connect(port: number, address?: string): Promise<void>;
    close(): Promise<void>;
    send(msg: UDPMsg, options?: UDPSendOptionsType): Promise<number>;
    addMembership(multicastAddress: string, multicastInterface?: string): Promise<void>;
    dropMembership(multicastAddress: string, multicastInterface?: string): Promise<void>;
    setBroadcast(flag: boolean): Promise<void>;
    setMulticastInterface(multicastInterface: string): Promise<void>;
    setMulticastLoopback(flag: boolean): Promise<void>;
    setMulticastTTL(ttl: number): Promise<void>;
    setRecvBufferSize(size: number): Promise<void>;
    setSendBufferSize(size: number): Promise<void>;
    setTTL(ttl: number): Promise<void>;
}
export * from './node-udp';
export * from './mobile-udp';
export * from './interface';
