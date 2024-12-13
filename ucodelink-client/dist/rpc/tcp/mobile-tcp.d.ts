export class MobileTCP extends EventEmitter {
    constructor(...args: any[]);
    /**
     * events.EventEmitter
     * override 事件接口, typecheck设置
     */
    _originOn: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _originOnce: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    _originEmit: (event: string | symbol, ...args: any[]) => boolean;
    _originaddListener: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    createServer(options: any): void;
    addressOfServer(): void;
    close(): void;
    listen(options: any): void;
    getConnections(): void;
    setMaxConnections(maxConnections: any): void;
    getMaxConnections(): void;
    isListening(): void;
    createSocket(options: any): void;
    connect(options: any): void;
    destroySocket(): void;
    isDestroyed(): void;
    end(strOrBuffer: any, encoding: any): void;
    pause(): void;
    resume(): void;
    setEncoding(encoding: any): void;
    setKeepAlive(enable: any, initialDelay: any): void;
    setNoDelay(noDelay: any): void;
    setTimeout(timeout: any): void;
    write(strOrBuffer: any, encoding: any): void;
    addressOfSocket(): void;
    getBytesRead(): void;
    getBytesWritten(): void;
    isConnecting(): void;
}
import { EventEmitter } from "events";
