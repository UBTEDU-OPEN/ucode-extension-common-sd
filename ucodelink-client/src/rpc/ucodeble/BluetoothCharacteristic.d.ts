/// <reference types="node" />
import { EventEmitter } from 'events';
import { BluetoothRemoteGATTService } from './BlueTooth.interface';
export default class BluetoothCharacteristic extends EventEmitter {
    private uuid;
    private service;
    constructor(uuid: string | number, service: BluetoothRemoteGATTService);
    writeValue(data: BufferSource): Promise<any>;
    startNotifications(): Promise<any>;
    stopNotifications(): Promise<any>;
    onCharacteristicvaluechanged(): Promise<any>;
    addEventListener(type: string, listener: () => any): void;
    removeEventListener(event: string | symbol, listener: (...args: any[]) => void): void;
}
