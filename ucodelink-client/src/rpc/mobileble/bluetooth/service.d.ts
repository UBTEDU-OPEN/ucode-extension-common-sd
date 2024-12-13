/// <reference types="web-bluetooth" />
import BluetoothCharacteristic from './characteristic';
import type JsCallNativeAPIs from '../bridge/JsCallNativeAPIs';
export default class Service {
    readonly device: BluetoothDevice;
    readonly uuid: BluetoothServiceUUID;
    readonly _rpc: JsCallNativeAPIs;
    private characteristics;
    isPrimary: boolean;
    constructor(device: BluetoothDevice, uuid: BluetoothServiceUUID, isPrimary: boolean, rpc: JsCallNativeAPIs);
    getCharacteristic(characteristicUUID: BluetoothServiceUUID): Promise<BluetoothCharacteristic>;
    private _filterCharacteristicWithUUID;
    private getCharacteristics;
}
