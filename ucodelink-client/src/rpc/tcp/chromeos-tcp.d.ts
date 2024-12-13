/// <reference types="node" />
import { EventEmitter } from 'events';
import { AddressInfo } from '../../types/socket';
import { ITcp, TCPEvents, ListenOptions, ServerOpts, SocketConnectOpts, SocketConstructorOpts } from './interface';
export declare class ChromeOSTCP extends EventEmitter implements ITcp {
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
