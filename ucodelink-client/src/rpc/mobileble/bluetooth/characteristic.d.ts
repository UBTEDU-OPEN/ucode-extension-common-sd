/// <reference types="web-bluetooth" />
/// <reference types="node" />
import { EventEmitter } from 'events';
import type JsCallNativeAPIs from '../bridge/JsCallNativeAPIs';
export default class BluetoothCharacteristic extends EventEmitter {
    readonly uuid: string | number;
    readonly service: BluetoothRemoteGATTService;
    readonly _rpc: JsCallNativeAPIs;
    constructor(uuid: string | number, service: BluetoothRemoteGATTService, rpc: JsCallNativeAPIs);
    private onCharacteristicValueChanged;
    writeValue(data: BufferSource): Promise<void>;
    startNotifications(): Promise<void>;
    stopNotifications(): Promise<any>;
    addEventListener(type: string, listener: () => any): void;
    removeEventListener(event: string | symbol, listener: (...args: any[]) => void): void;
}
