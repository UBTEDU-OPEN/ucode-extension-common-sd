export * from "../../types/serialport";
export class SerialPortRPCAdapter extends BaseRPCAdapter {
    static list(): Promise<never[]>;
    constructor(serial: any, options: any, callback: any, rpcClient: any);
    _isOpen: boolean;
    _opening: boolean;
    _closing: boolean;
    _baudRate: any;
    reader: any;
    writer: any;
    _serial: any;
    openCallback: any;
    settings: any;
    get isOpen(): boolean;
    get opening(): boolean;
    get baudRate(): any;
    get binding(): null;
    get closing(): boolean;
    _error(error: any, callback: any): void;
    _asyncError(error: any, callback: any): void;
    initReadStream(): Promise<void>;
    initWriteStream(): Promise<void>;
    open(openCallback: any): void;
    close(callback: any, disconnectError: any): Promise<void>;
    write(data: any, encoding: any, callback: any): boolean;
    /**
     * 该方法目前还没办法实现，node 的库是以 stream 的形式实现同步的
     * TODO: 实现 read 方法
     */
    read(): string;
    set(options: any, callback: any): Promise<void>;
    get(callback: any): void;
    flush(callback: any): void;
    drain(callback: any): void;
    resume(): SerialPortRPCAdapter;
    pause(): SerialPortRPCAdapter;
}
import { BaseRPCAdapter } from "../base";
