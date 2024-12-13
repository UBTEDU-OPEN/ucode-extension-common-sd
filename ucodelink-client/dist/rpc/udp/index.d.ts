export class UDPAdapter extends EventEmitter {
    constructor();
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
    _originOn: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _originOnce: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _originEmit: (event: string | symbol, ...args: any[]) => boolean;
    _originaddListener: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _currentUdp: MobileUDP | ChromeOSUDP | NodeUDP;
    _bindEvents(): void;
    createSocket(options: any): Promise<string>;
    bind(port: any, address: any): Promise<import("../..").AddressInfo>;
    getLocalAddress(): Promise<import("../..").AddressInfo>;
    getRemoteAddress(): Promise<import("../..").AddressInfo>;
    connect(port: any, address: any): Promise<void>;
    close(): Promise<void>;
    send(msg: any, options: any): Promise<number>;
    addMembership(multicastAddress: any, multicastInterface: any): Promise<void>;
    dropMembership(multicastAddress: any, multicastInterface: any): Promise<void>;
    setBroadcast(flag: any): Promise<void>;
    setMulticastInterface(multicastInterface: any): Promise<void>;
    setMulticastLoopback(flag: any): Promise<void>;
    setMulticastTTL(ttl: any): Promise<void>;
    setRecvBufferSize(size: any): Promise<void>;
    setSendBufferSize(size: any): Promise<void>;
    setTTL(ttl: any): Promise<void>;
}
export * from "./node-udp";
export * from "./mobile-udp";
export * from "./interface";
import { EventEmitter } from "events";
import { MobileUDP } from "./mobile-udp";
import { ChromeOSUDP } from "./chromeos-udp";
import { NodeUDP } from "./node-udp";
