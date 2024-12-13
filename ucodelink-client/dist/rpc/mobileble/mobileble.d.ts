/// <reference types="node" />
export class MobileBluetooth extends EventEmitter {
    constructor();
    _devices: any[];
    _rpc: JsCallNativeAPIs;
    filterDevice(filters: any, deviceInfo: any): boolean;
    initBluetoothDevice(deviceInfo: any, optionalServices: any): Device;
    requestDevice(options: any): Promise<any>;
    onDeviceDiscovered(devices: any): void;
    stopDiscover(): Promise<any>;
}
import EventEmitter from "events";
import JsCallNativeAPIs from "./bridge/JsCallNativeAPIs";
import Device from "./bluetooth/device";
