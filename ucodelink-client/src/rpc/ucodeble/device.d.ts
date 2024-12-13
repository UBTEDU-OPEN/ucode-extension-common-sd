/// <reference types="node" />
import EventEmitter from 'events';
import Gatt from './gatt';
export default class Device extends EventEmitter {
    readonly id: string;
    readonly name: string;
    readonly gatt: Gatt;
    readonly uuids: string[];
    readonly watchingAdvertisements = false;
    readonly rssi: number;
    connected: boolean;
    constructor(id: string, name?: string, uuids?: string[], rssi?: number);
    connect(options: any): void;
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
