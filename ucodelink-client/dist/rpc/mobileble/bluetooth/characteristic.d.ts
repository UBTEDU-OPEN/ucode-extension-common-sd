export default class BluetoothCharacteristic extends EventEmitter {
    constructor(uuid: any, service: any, rpc: any);
    uuid: any;
    service: any;
    _rpc: any;
    onCharacteristicValueChanged(deviceUuid: any, serviceUuid: any, characteristicUuid: any, data: any): void;
    writeValue(data: any): Promise<any>;
    startNotifications(): any;
    stopNotifications(): any;
    addEventListener(type: any, listener: any): void;
    removeEventListener(event: any, listener: any): void;
}
import { EventEmitter } from "events";
