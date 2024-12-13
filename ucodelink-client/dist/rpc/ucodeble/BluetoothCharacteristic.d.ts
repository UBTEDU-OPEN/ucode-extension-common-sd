export default class BluetoothCharacteristic extends EventEmitter {
    constructor(uuid: any, service: any);
    uuid: any;
    service: any;
    writeValue(data: any): Promise<never>;
    startNotifications(): Promise<never>;
    stopNotifications(): Promise<never>;
    onCharacteristicvaluechanged(): Promise<never>;
    addEventListener(type: any, listener: any): void;
    removeEventListener(event: any, listener: any): void;
}
import { EventEmitter } from "events";
