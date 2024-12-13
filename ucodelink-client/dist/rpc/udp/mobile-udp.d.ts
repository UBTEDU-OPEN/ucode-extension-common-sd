export class MobileUDP extends EventEmitter {
    constructor(...args: any[]);
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
    createSocket(options: any): void;
    bind(port: any, address: any): void;
    getLocalAddress(): void;
    getRemoteAddress(): void;
    connect(port: any, address: any): void;
    close(): void;
    send(msg: any, options: any): void;
    addMembership(multicastAddress: any, multicastInterface: any): void;
    dropMembership(multicastAddress: any, multicastInterface: any): void;
    setBroadcast(flag: any): void;
    setMulticastInterface(multicastInterface: any): void;
    setMulticastLoopback(flag: any): void;
    setMulticastTTL(ttl: any): void;
    setRecvBufferSize(size: any): void;
    setSendBufferSize(size: any): void;
    setTTL(ttl: any): void;
}
import { EventEmitter } from "events";
