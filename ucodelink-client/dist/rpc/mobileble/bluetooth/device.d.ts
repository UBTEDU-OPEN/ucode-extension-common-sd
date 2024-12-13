/// <reference types="node" />
export default class Device extends EventEmitter {
    constructor(deviceInitInfo: any, rpc: any);
    watchingAdvertisements: boolean;
    connected: boolean;
    id: any;
    name: any;
    uuids: any;
    rssi: any;
    gatt: GATTServer;
    onConnectStateChanged(name: any, mac: any, connect: any): void;
    onBluetoothEnable(enable: any): void;
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
import GATTServer from "./server";
