/// <reference types="node" />
import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import * as SP from '../../types/serialport';
import { BaseRPCAdapter } from '../base';
export * from '../../types/serialport';
export declare class SerialPortRPCAdapter extends BaseRPCAdapter {
    private settings;
    private openCallback;
    private comName;
    private _isOpen;
    private _opening;
    private _closing;
    private _baudRate;
    get isOpen(): boolean;
    get opening(): boolean;
    get baudRate(): number;
    get binding(): null;
    get path(): string;
    get closing(): boolean;
    constructor(comName: string, options: SP.OpenOptions, callback?: SP.SPErrorCallback, rpcClient?: RpcClient);
    private _error;
    private _asyncError;
    private initRpcEvent;
    private _rpcListenSPFn;
    static list(filterOpened?: boolean): Promise<SP.PortInfo[]>;
    open(openCallback?: SP.SPErrorCallback): void;
    update(options: SP.UpdateOptions, callback?: SP.SPErrorCallback): void;
    close(callback?: SP.SPErrorCallback, disconnectError?: Error): void;
    write(data: SP.SPWriteData, encoding?: SP.SPEncoding | SP.SPWriteCallback, callback?: SP.SPWriteCallback): boolean;
    /**
     * 该方法目前还没办法实现，node 的库是以 stream 的形式实现同步的
     * TODO: 实现 read 方法
     */
    read(): string | Buffer | null;
    set(options: SP.SetOptions, callback?: SP.SPErrorCallback): void;
    get(callback?: SP.SPModemBitsCallback): void;
    flush(callback?: SP.SPErrorCallback): void;
    drain(callback?: SP.SPErrorCallback): void;
    resume(): this;
    pause(): this;
    destroy(): void;
    rpcCloseHandler(): void;
    private _call;
}
