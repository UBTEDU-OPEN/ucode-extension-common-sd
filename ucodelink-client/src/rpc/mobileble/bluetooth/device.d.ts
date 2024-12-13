/// <reference types="node" />
import EventEmitter from 'events';
import type JsCallNativeAPIs from '../bridge/JsCallNativeAPIs';
import GATTServer from './server';
export default class Device extends EventEmitter {
    readonly id: string;
    readonly name: string;
    readonly gatt: GATTServer;
    readonly uuids: string[];
    readonly watchingAdvertisements = false;
    readonly rssi: string;
    connected: boolean;
    constructor(deviceInitInfo: {
        id: string;
        name: string;
        rssi: string;
        uuids?: string[];
    }, rpc: JsCallNativeAPIs);
    private onConnectStateChanged;
    private onBluetoothEnable;
    onadvertisementreceived(this: this, ev: Event): void;
    ongattserverdisconnected(this: this, ev: Event): void;
    oncharacteristicvaluechanged(data: any): void;
    onserviceadded(this: this, ev: Event): void;
    onservicechanged(this: this, ev: Event): void;
    onserviceremoved(this: this, ev: Event): void;
    watchAdvertisements(): Promise<void>;
    unwatchAdvertisements(): void;
    addEventListener(type: string, listener: () => any): void;
    removeEventListener(event: string | symbol, listener: (...args: any[]) => void): void;
}
