/// <reference types="node" />
export declare type SPErrorCallback = (error?: Error | null) => void;
export declare type SPModemBitsCallback = (error: Error | null | undefined, status?: InputSignals) => void;
export declare type SPListCallback = (error: Error | null | undefined, ports: any[]) => void;
export declare type SPWriteCallback = (error: Error | null | undefined, bytesWritten?: number) => void;
export declare type SPEncoding = 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'binary' | 'hex';
export declare type SPWriteData = string | number[] | Buffer;
export interface OpenOptions {
    autoOpen?: boolean;
    endOnClose?: boolean;
    baudRate: 115200 | 57600 | 38400 | 19200 | 9600 | 4800 | 2400 | 1800 | 1200 | 600 | 300 | 200 | 150 | 134 | 110 | 75 | 50 | number;
    dataBits?: 8 | 7 | 6 | 5;
    highWaterMark?: number;
    lock?: boolean;
    stopBits?: 1 | 2;
    parity?: 'none' | 'even' | 'odd';
    rtscts?: boolean;
    xon?: boolean;
    xoff?: boolean;
    xany?: boolean;
    binding?: BaseBinding;
    bindingOptions?: {
        vmin?: number;
        vtime?: number;
    };
    bufferSize?: number;
    flowControl?: 'none' | 'hardware';
}
export interface UpdateOptions {
    baudRate?: 115200 | 57600 | 38400 | 19200 | 9600 | 4800 | 2400 | 1800 | 1200 | 600 | 300 | 200 | 150 | 134 | 110 | 75 | 50 | number;
}
export declare type SetOptions = {
    brk?: boolean;
    cts?: boolean;
    dsr?: boolean;
    dtr?: boolean;
    rts?: boolean;
} & SerialOutputSignals;
declare type InputSignals = {
    cts?: boolean;
    dsr?: boolean;
    dcd?: boolean;
} & SerialInputSignals;
export interface PortInfo {
    comName: string;
    manufacturer?: string;
    serialNumber?: string;
    pnpId?: string;
    locationId?: string;
    productId?: string;
    vendorId?: string;
}
export interface BaseBinding {
    open(path: string, options: OpenOptions): Promise<any>;
    close(): Promise<any>;
    read(data: Buffer, offset: number, length: number): Promise<any>;
    write(data: Buffer): Promise<any>;
    update(options?: UpdateOptions): Promise<any>;
    set(options?: SetOptions): Promise<any>;
    get(): Promise<any>;
    flush(): Promise<any>;
    drain(): Promise<any>;
    list(): Promise<PortInfo[]>;
}
export declare type SerialPortInfo = {
    usbVendorId?: number;
    usbProductId?: number;
};
export declare type SerialPortRequestOptions = {
    filters: Array<SerialPortInfo>;
};
export declare type SerialOptions = {
    baudRate: number;
    dataBits?: number;
    stopBits?: number;
    parity?: 'none' | 'even' | 'odd';
    bufferSize?: number;
    flowControl?: 'none' | 'hardware';
};
export interface SerialOutputSignals {
    dataTerminalReady?: boolean;
    requestToSend?: boolean;
    break?: boolean;
}
export interface SerialInputSignals {
    dataCarrierDetect?: boolean;
    clearToSend?: boolean;
    ringIndicator?: boolean;
    dataSetReady?: boolean;
}
export interface SerialPort extends EventTarget {
    onconnect: GlobalEventHandlers;
    ondisconnnect: GlobalEventHandlers;
    readonly readable: ReadableStream;
    readonly writable: WritableStream;
    getInfo: () => SerialPortInfo;
    open: (options: SerialOptions) => Promise<void>;
    setSignals: (signals?: SerialOutputSignals) => Promise<void>;
    getSignals: () => Promise<SerialInputSignals>;
    close: () => Promise<void>;
}
export interface Serial extends EventTarget {
    onconnect: GlobalEventHandlers;
    ondisconnnect: GlobalEventHandlers;
    getPorts: () => Promise<Array<SerialPort>>;
    requestPort: (options?: SerialPortRequestOptions) => Promise<SerialPort>;
}
export {};
