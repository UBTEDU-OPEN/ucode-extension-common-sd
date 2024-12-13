/// <reference types="node" />
export default class Device extends EventEmitter {
    constructor(id: any, name: any, uuids: any, rssi: any);
    watchingAdvertisements: boolean;
    connected: boolean;
    id: any;
    name: any;
    uuids: any;
    rssi: any;
    gatt: Gatt;
    connect(options: any): void;
    onadvertisementreceived(ev: any): void;
    ongattserverdisconnected(ev: any): void;
    oncharacteristicvaluechanged(data: any): void;
    onserviceadded(ev: any): void;
    onservicechanged(ev: any): void;
    onserviceremoved(ev: any): void;
    watchAdvertisements(): void;
    unwatchAdvertisements(): void;
    addEventListener(type: any, listener: any): void;
    removeEventListener(event: any, listener: any): void;
}
import EventEmitter from "events";
import Gatt from "./gatt";
