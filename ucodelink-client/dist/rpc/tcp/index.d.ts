export class TCPAdapter extends EventEmitter {
    constructor();
    /**
     * events.EventEmitter
     * override 事件接口, typecheck设置
     */
    _originOn: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _originOnce: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _originEmit: (event: string | symbol, ...args: any[]) => boolean;
    _originaddListener: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _currentTCP: MobileTCP | ChromeOSTCP | NodeTCP;
    _bindEvents(): void;
    createServer(options: any): Promise<string>;
    addressOfServer(): Promise<import("../..").AddressInfo>;
    close(): Promise<Error | undefined>;
    listen(options: any): Promise<void>;
    getConnections(): Promise<{
        error: Error | null;
        count: number;
    }>;
    setMaxConnections(maxConnections: any): Promise<void>;
    getMaxConnections(): Promise<number>;
    isListening(): Promise<boolean>;
    createSocket(options: any): Promise<string>;
    connect(options: any): Promise<void>;
    destroySocket(): Promise<Error | undefined>;
    isDestroyed(): Promise<boolean>;
    end(strOrBuffer: any, encoding: any): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    setEncoding(encoding: any): Promise<void>;
    setKeepAlive(enable: any, initialDelay: any): Promise<void>;
    setNoDelay(noDelay: any): Promise<void>;
    setTimeout(timeout: any): Promise<void>;
    write(strOrBuffer: any, encoding: any): Promise<{
        error: Error | undefined;
        flushed: boolean;
    }>;
    addressOfSocket(): Promise<import("../..").AddressInfo>;
    getBytesRead(): Promise<number>;
    getBytesWritten(): Promise<number>;
    isConnecting(): Promise<boolean>;
}
export * from "./node-tcp";
export * from "./mobile-tcp";
export * from "./interface";
import { EventEmitter } from "events";
import { MobileTCP } from "./mobile-tcp";
import { ChromeOSTCP } from "./chromeos-tcp";
import { NodeTCP } from "./node-tcp";
