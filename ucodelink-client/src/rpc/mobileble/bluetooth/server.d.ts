/// <reference types="web-bluetooth" />
import type JsCallNativeAPIs from '../bridge/JsCallNativeAPIs';
export default class GATTServer {
    readonly device: BluetoothDevice;
    connected: boolean;
    readonly _rpc: JsCallNativeAPIs;
    constructor(device: BluetoothDevice, rpc: JsCallNativeAPIs);
    connect(): Promise<GATTServer>;
    disconnect(): Promise<void>;
    getPrimaryService(UUID: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
    getPrimaryServices(UUID?: BluetoothServiceUUID): Promise<any[]>;
}
