/// <reference types="web-bluetooth" />
/// <reference types="node" />
import EventEmitter from 'events';
export declare class MobileBluetooth extends EventEmitter {
    private _devices;
    private _rpc;
    constructor();
    private filterDevice;
    private initBluetoothDevice;
    requestDevice(options: RequestDeviceOptions): Promise<void>;
    onDeviceDiscovered(devices: BluetoothDevice[]): void;
    stopDiscover(): Promise<void>;
}
